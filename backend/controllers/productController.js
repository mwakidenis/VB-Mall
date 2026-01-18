const Product = require("../models/Product");

// GET /api/products
// Query params:
// - page (default 1), limit (default 10)
// - q (search in name/description), category, minPrice, maxPrice
// - sort (e.g. "price", "-price", "name", "-createdAt")
exports.getProducts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      q,
      category,
      minPrice,
      maxPrice,
      sort,
    } = req.query;

    const filter = {};

    if (q) {
      filter.$or = [
        { name: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
      ];
    }

    if (category) {
      filter.category = category;
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // Optional: only return active products if you have such a field
    if (typeof req.query.isActive !== "undefined") {
      filter.isActive = req.query.isActive === "true";
    }

    // Sorting
    let sortSpec = {};
    if (sort) {
      // Example: "-price" => { price: -1 }, "name" => { name: 1 }
      const fields = Array.isArray(sort) ? sort : [sort];
      fields.forEach((f) => {
        if (f.startsWith("-")) {
          sortSpec[f.slice(1)] = -1;
        } else {
          sortSpec[f] = 1;
        }
      });
    } else {
      sortSpec = { createdAt: -1 };
    }

    const pageNum = Math.max(parseInt(page, 10) || 1, 1);
    const limitNum = Math.min(Math.max(parseInt(limit, 10) || 10, 1), 100);

    const [items, total] = await Promise.all([
      Product.find(filter)
        .sort(sortSpec)
        .skip((pageNum - 1) * limitNum)
        .limit(limitNum),
      Product.countDocuments(filter),
    ]);

    res.status(200).json({
      data: items,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /api/products/:id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    // Handle invalid ObjectId format
    if (error.name === "CastError") {
      return res.status(400).json({ error: "Invalid product ID" });
    }
    res.status(500).json({ error: error.message });
  }
};

// POST /api/products
exports.createProduct = async (req, res) => {
  try {
    const payload = req.body;

    // Basic required fields check (adjust to your schema)
    if (!payload.name || payload.price == null) {
      return res
        .status(400)
        .json({ error: "name and price are required" });
    }

    const product = await Product.create(payload);
    res.status(201).json(product);
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: error.message });
  }
};

// PUT /api/products/:id (full update) or PATCH /api/products/:id (partial)
exports.updateProduct = async (req, res) => {
  try {
    const options = {
      new: true, // return the updated document
      runValidators: true,
    };

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );

    if (!product)
      return res.status(404).json({ error: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ error: "Invalid product ID" });
    }
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: error.message });
  }
};

// DELETE /api/products/:id
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Product not found" });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ error: "Invalid product ID" });
    }
    res.status(500).json({ error: error.message });
  }
};