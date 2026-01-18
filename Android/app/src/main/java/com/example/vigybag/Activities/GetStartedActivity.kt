package com.example.vigybag.Activities

import android.content.Intent
import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.vigybag.R
import com.example.vigybag.databinding.ActivityGetstartedBinding

class GetStartedActivity : AppCompatActivity() {
    private lateinit var binding:ActivityGetstartedBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityGetstartedBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.getstart.setOnClickListener{
            startActivity(Intent(this@GetStartedActivity, LoginActivity::class.java))
        }

    }
}