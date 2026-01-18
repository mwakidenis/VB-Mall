
package com.example.vigybag.Fragments
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.denzcoskun.imageslider.constants.AnimationTypes
import com.denzcoskun.imageslider.constants.ScaleTypes
import com.denzcoskun.imageslider.interfaces.ItemClickListener
import com.denzcoskun.imageslider.models.SlideModel
import com.example.vigybag.API.Model.NewAddedProductItem
import com.example.vigybag.API.Model.RecommendModelItem
import com.example.vigybag.Activities.MainActivity
import com.example.vigybag.Adapter.ItemMayLikeAdapter
import com.example.vigybag.Adapter.ProductAdapter
import com.example.vigybag.Adapter.RecommendAdapter
import com.example.vigybag.Common.utils.showToast
import com.example.vigybag.R
import com.example.vigybag.databinding.FragmentHomeBinding
import com.example.vigybag.viewmodels.homeviewmodel


class HomeFragment : Fragment() {
    private lateinit var productAdapter: ProductAdapter
    private lateinit var binding: FragmentHomeBinding
    private lateinit var recommendAdapter: RecommendAdapter
    private lateinit var itemAdapter: ItemMayLikeAdapter
    private lateinit var viewModel: homeviewmodel
    private lateinit var newrecyclerview:RecyclerView
    private lateinit var itemrecyclerview:RecyclerView
    private lateinit var recyclerView: RecyclerView

    private val products = mutableListOf<NewAddedProductItem>()
    private val wishlist = mutableListOf<NewAddedProductItem>()


    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentHomeBinding.inflate(layoutInflater, container, false)



        val view = binding.root



        recyclerView = view.findViewById(R.id.recyclerview)
        recyclerView.layoutManager = LinearLayoutManager(requireContext(),LinearLayoutManager.HORIZONTAL, false)

        newrecyclerview = view.findViewById(R.id.newRecyclerview)
        newrecyclerview.layoutManager = GridLayoutManager(requireContext(), 2)

        itemrecyclerview = view.findViewById(R.id.itemrecyclerview)
        itemrecyclerview.layoutManager = GridLayoutManager(requireContext(), 2)

        viewModel = ViewModelProvider(this).get(homeviewmodel::class.java)

        observeViewModel()

        fetchingNewAddedProduct()

        itemYouMayLikeProduct()

        val imageList = ArrayList<SlideModel>()
        imageList.add(SlideModel(R.drawable.s, ScaleTypes.FIT))
        imageList.add(SlideModel(R.drawable.s1, ScaleTypes.FIT))
        imageList.add(SlideModel(R.drawable.s3, ScaleTypes.FIT))
        imageList.add(SlideModel(R.drawable.s2, ScaleTypes.FIT))
        imageList.add(SlideModel(R.drawable.s, ScaleTypes.FIT))
        imageList.add(SlideModel(R.drawable.s1, ScaleTypes.FIT))
        imageList.add(SlideModel(R.drawable.s3, ScaleTypes.FIT))
        imageList.add(SlideModel(R.drawable.s2, ScaleTypes.FIT))


        val imageSlider = binding.imageslider
        imageSlider.setImageList(imageList)
        imageSlider.setSlideAnimation(AnimationTypes.ZOOM_OUT)
        imageSlider.setImageList(imageList, ScaleTypes.FIT)


        imageSlider.setItemClickListener(object : ItemClickListener {
            override fun doubleClick(position: Int) {
            }

            override fun onItemSelected(position: Int) {
                val itemPosition = imageList[position]
                val itemMessage = "Selected Image $position"
                Toast.makeText(context, itemMessage, Toast.LENGTH_SHORT).show()
            }
        })


        val imageListt = ArrayList<SlideModel>()
        imageListt.add(SlideModel(R.drawable.s, ScaleTypes.FIT))
        imageListt.add(SlideModel(R.drawable.s1, ScaleTypes.FIT))
        imageListt.add(SlideModel(R.drawable.s3, ScaleTypes.FIT))
        imageListt.add(SlideModel(R.drawable.s2, ScaleTypes.FIT))
        imageListt.add(SlideModel(R.drawable.s, ScaleTypes.FIT))
        imageListt.add(SlideModel(R.drawable.s1, ScaleTypes.FIT))
        imageListt.add(SlideModel(R.drawable.s3, ScaleTypes.FIT))
        imageListt.add(SlideModel(R.drawable.s2, ScaleTypes.FIT))


        val imageSliderr = binding.imagesliderr
        imageSliderr.setImageList(imageList)
        imageSliderr.setSlideAnimation(AnimationTypes.ZOOM_OUT)
        imageSliderr.setImageList(imageList, ScaleTypes.FIT)


        imageSliderr.setItemClickListener(object : ItemClickListener {
            override fun doubleClick(position: Int) {
            }

            override fun onItemSelected(position: Int) {
                val itemPosition = imageList[position]
                val itemMessage = "Selected Image $position"
                Toast.makeText(context, itemMessage, Toast.LENGTH_SHORT).show()
            }
        })


        return view

    }

    private fun itemYouMayLikeProduct() {
        viewModel.products.observe(viewLifecycleOwner, Observer { products ->
            products.let {
                itemAdapter = ItemMayLikeAdapter(it)
                itemrecyclerview.adapter = itemAdapter
            }
        })
    }

    private fun fetchingNewAddedProduct() {
        viewModel.newProduct.observe(viewLifecycleOwner, Observer { products ->
            products.let {
                productAdapter = ProductAdapter(products, ::onLikeClicked, ::onLikeDoubleClicked)
                newrecyclerview.adapter = productAdapter
            }
        })
    }


    private fun observeViewModel() {


        viewModel.products.observe(viewLifecycleOwner, Observer { product ->
            product?.let {
                recommendAdapter = RecommendAdapter(it)
                recyclerView.adapter = recommendAdapter

            }
        })
    }




    private fun onLikeClicked(product: NewAddedProductItem) {
        product.isLiked = true
        wishlist.add(product)
        updateWishlistFragment()
    }

    private fun onLikeDoubleClicked(product: NewAddedProductItem) {
        product.isLiked = false
        wishlist.remove(product)
        updateWishlistFragment()
    }

    private fun updateWishlistFragment() {
        (activity as? MainActivity)?.updateWishlist(wishlist)
    }







}