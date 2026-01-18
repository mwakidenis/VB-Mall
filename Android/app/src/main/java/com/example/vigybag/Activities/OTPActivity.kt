package com.example.vigybag.Activities

import android.content.Intent
import android.os.Bundle
import android.os.CountDownTimer
import android.text.Editable
import android.text.TextWatcher
import android.util.Log
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.emreesen.sntoast.SnToast
import com.emreesen.sntoast.Type
import com.example.vigybag.R
import com.example.vigybag.databinding.ActivityOtpactivityBinding
import com.example.vigybag.Common.utils
import com.google.firebase.FirebaseException
import com.google.firebase.FirebaseTooManyRequestsException
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseAuthInvalidCredentialsException
import com.google.firebase.auth.PhoneAuthCredential
import com.google.firebase.auth.PhoneAuthOptions
import com.google.firebase.auth.PhoneAuthProvider
import java.util.concurrent.TimeUnit

class OTPActivity : AppCompatActivity() {
    private lateinit var binding: ActivityOtpactivityBinding
    private lateinit var auth: FirebaseAuth
    private lateinit var continuee: Button
    private lateinit var resendTV: TextView
    private lateinit var et1: EditText
    private lateinit var et2: EditText
    private lateinit var et3: EditText
    private lateinit var et4: EditText
    private lateinit var et5: EditText
    private lateinit var et6: EditText

    private lateinit var OTP: String
    private lateinit var resendToken: PhoneAuthProvider.ForceResendingToken
    private lateinit var phoneNumber: String

    private var resendCountDown: Long = 60000 // 60 seconds countdown
    private var resendCountDownTimer: CountDownTimer? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityOtpactivityBinding.inflate(layoutInflater)
        setContentView(binding.root)

        OTP = intent.getStringExtra("OTP").toString()
        resendToken = intent.getParcelableExtra("resendToken")!!
        phoneNumber = intent.getStringExtra("phoneNumber")!!

        initViews()
        utils.hideDialog()
        addTextChangeListener()
        resendOTPTvVisibility()

        resendTV.setOnClickListener {
            resendVerificationCode()
            resendOTPTvVisibility()
        }

        continuee.setOnClickListener {
            val typedOTP =
                (et1.text.toString() + et2.text.toString() + et3.text.toString()
                        + et4.text.toString() + et5.text.toString() + et6.text.toString())

            if (typedOTP.isNotEmpty()) {
                if (typedOTP.length == 6) {
                    val credential: PhoneAuthCredential = PhoneAuthProvider.getCredential(
                        OTP, typedOTP
                    )
                    utils.showDialog(this@OTPActivity,"Verifying OTP")
                    signInWithPhoneAuthCredential(credential)
                } else {
                    SnToast.Builder()
                        .context(this)
                        .type(Type.WARNING)
                        .message("Please Enter Correct OTP!")
                        .build()
                }
            } else {
                SnToast.Builder()
                    .context(this)
                    .type(Type.INFORMATION)
                    .message("Please Enter OTP!")
                    .build()
            }
        }
    }

    private fun initViews() {
        auth = FirebaseAuth.getInstance()
        continuee = findViewById(R.id.verify)
        resendTV = findViewById(R.id.ResendOTP)
        et1 = findViewById(R.id.etotp1)
        et2 = findViewById(R.id.etotp2)
        et3 = findViewById(R.id.etotp3)
        et4 = findViewById(R.id.etotp4)
        et5 = findViewById(R.id.etotp5)
        et6 = findViewById(R.id.etotp6)
    }

    private fun addTextChangeListener() {
        et1.addTextChangedListener(EditTextWatcher(et1))
        et2.addTextChangedListener(EditTextWatcher(et2))
        et3.addTextChangedListener(EditTextWatcher(et3))
        et4.addTextChangedListener(EditTextWatcher(et4))
        et5.addTextChangedListener(EditTextWatcher(et5))
        et6.addTextChangedListener(EditTextWatcher(et6))
    }

    private fun resendOTPTvVisibility() {
        et1.setText("")
        et2.setText("")
        et3.setText("")
        et4.setText("")
        et5.setText("")
        et6.setText("")
        resendTV.visibility = View.INVISIBLE
        resendTV.isEnabled = false

        resendCountDownTimer?.cancel() // Cancel previous timer if any

        resendCountDownTimer = object : CountDownTimer(resendCountDown, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val seconds = millisUntilFinished / 1000
                resendTV.text = "Resend OTP in $seconds sec"
            }

            override fun onFinish() {
                resendTV.visibility = View.VISIBLE
                resendTV.isEnabled = true
            }
        }.start()
    }

    private fun resendVerificationCode() {
        val options = PhoneAuthOptions.newBuilder(auth)
            .setPhoneNumber(phoneNumber)
            .setTimeout(60L, TimeUnit.SECONDS)
            .setActivity(this)
            .setCallbacks(callbacks)
            .setForceResendingToken(resendToken)
            .build()
        PhoneAuthProvider.verifyPhoneNumber(options)
    }

    private val callbacks = object : PhoneAuthProvider.OnVerificationStateChangedCallbacks() {
        override fun onVerificationCompleted(credential: PhoneAuthCredential) {
            signInWithPhoneAuthCredential(credential)
        }

        override fun onVerificationFailed(e: FirebaseException) {
            if (e is FirebaseAuthInvalidCredentialsException) {
                Log.d("TAG", "onVerificationFailed: ${e.toString()}")
            } else if (e is FirebaseTooManyRequestsException) {
                Log.d("TAG", "onVerificationFailed: ${e.toString()}")
            }
            utils.showDialog(this@OTPActivity, "Something went wrong")
        }

        override fun onCodeSent(
            verificationId: String,
            token: PhoneAuthProvider.ForceResendingToken
        ) {
            OTP = verificationId
            resendToken = token
        }
    }

    private fun signInWithPhoneAuthCredential(credential: PhoneAuthCredential) {
        auth.signInWithCredential(credential)
            .addOnCompleteListener(this) { task ->
                if (task.isSuccessful) {
                    SnToast.Builder()
                        .context(this)
                        .type(Type.SUCCESS)
                        .message("Authenticate Successfully")
                        .build()
                    sendToMain()
                } else {
                    Log.d("TAG", "signInWithPhoneAuthCredential: ${task.exception.toString()}")
                    if (task.exception is FirebaseAuthInvalidCredentialsException) {
                        // The verification code entered was invalid
                    }
                    utils.showDialog(this@OTPActivity, "Verifying OTP")
                }
            }
    }

    private fun sendToMain() {
        startActivity(Intent(this, MainActivity::class.java))
    }

    inner class EditTextWatcher(private val view: View) : TextWatcher {
        override fun beforeTextChanged(p0: CharSequence?, p1: Int, p2: Int, p3: Int) {}

        override fun onTextChanged(p0: CharSequence?, p1: Int, p2: Int, p3: Int) {}

        override fun afterTextChanged(p0: Editable?) {
            val text = p0.toString()
            when (view.id) {
                R.id.etotp1 -> if (text.length == 1) et2.requestFocus()
                R.id.etotp2 -> if (text.length == 1) et3.requestFocus() else if (text.isEmpty()) et1.requestFocus()
                R.id.etotp3 -> if (text.length == 1) et4.requestFocus() else if (text.isEmpty()) et2.requestFocus()
                R.id.etotp4 -> if (text.length == 1) et5.requestFocus() else if (text.isEmpty()) et3.requestFocus()
                R.id.etotp5 -> if (text.length == 1) et6.requestFocus() else if (text.isEmpty()) et4.requestFocus()
                R.id.etotp6 -> if (text.isEmpty()) et5.requestFocus()
            }
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        resendCountDownTimer?.cancel() // Cancel countdown timer to prevent memory leaks
    }
}





