package com.example.vigybag.Activities

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.ImageView
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import com.emreesen.sntoast.SnToast
import com.emreesen.sntoast.Type
import com.example.vigybag.R
import com.example.vigybag.databinding.ProgressDialogBinding
import com.example.vigybag.Common.utils
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInAccount
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.firebase.FirebaseException
import com.google.firebase.FirebaseTooManyRequestsException
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseAuthInvalidCredentialsException
import com.google.firebase.auth.GoogleAuthProvider
import com.google.firebase.auth.PhoneAuthCredential
import com.google.firebase.auth.PhoneAuthOptions
import com.google.firebase.auth.PhoneAuthProvider
import java.util.concurrent.TimeUnit

class LoginActivity : AppCompatActivity() {
    private lateinit var binding: ProgressDialogBinding
    private lateinit var login: Button
    private lateinit var etPhoneNumber: EditText
    private lateinit var auth: FirebaseAuth
    private lateinit var number: String
    private lateinit var google: ImageView
    private lateinit var googleSignInClient: GoogleSignInClient


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        google = findViewById(R.id.google)
//

        val googleSignInOption = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestIdToken(getString(R.string.default_web_client_id)).requestEmail().build()

        googleSignInClient = GoogleSignIn.getClient(this, googleSignInOption)



        google.setOnClickListener {
            val signIntent = googleSignInClient.signInIntent
            launcher.launch(signIntent)
            startActivity(Intent(this@LoginActivity, MainActivity::class.java))
        }


        init()
       login.setOnClickListener {
            number = etPhoneNumber.text.trim().toString()
            if (number.isNotEmpty()) {
                if (number.length == 10) {
                    number = "+91$number"
//                    mProgressBar.visibility = View.VISIBLE
                    utils.showDialog(this@LoginActivity, "Sending OTP")
                    val options = PhoneAuthOptions.newBuilder(auth)
                        .setPhoneNumber(number)       // Phone number to verify
                        .setTimeout(60L, TimeUnit.SECONDS) // Timeout and unit
                        .setActivity(this)                 // Activity (for callback binding)
                        .setCallbacks(callbacks) // OnVerificationStateChangedCallbacks
                        .build()
                    PhoneAuthProvider.verifyPhoneNumber(options)

                } else {
                    SnToast.Builder()
                        .context(this)
                        .type(Type.INFORMATION)
                        .message("Please enter correct Number!")
                        .build()
                 }

            } else {
                SnToast.Builder()
                    .context(this)
                    .type(Type.WARNING)
                    .message("Please Enter Number!")
                    .build()

            }
        }
    }


    private val launcher =
        registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->

            if (result.resultCode == Activity.RESULT_OK) {
                val task = GoogleSignIn.getSignedInAccountFromIntent(result.data)

                if (task.isSuccessful) {
                    val account: GoogleSignInAccount? = task.result
                    val credential = GoogleAuthProvider.getCredential(account?.idToken, null)

                   utils.showDialog(this, "Signing You")

                    FirebaseAuth.getInstance().signInWithCredential(credential)
                        .addOnCompleteListener { task ->
                            utils.hideDialog()
                            if (task.isSuccessful) {

                                SnToast.Builder()
                                    .context(this)
                                    .type(Type.SUCCESS)
                                    .message("Sign-in Successful!")
                                    .build()
                          startActivity(Intent(this, MainActivity::class.java))
                                finish()
                            } else {
                                SnToast.Builder()
                                    .context(this)
                                    .type(Type.SUCCESS)
                                    .message("Sign in field!")
                                    .build()
                           }
                        }
                } else {
                    SnToast.Builder()
                        .context(this)
                        .type(Type.INFORMATION)
                        .message("Sign in field!")
                        .build()
              }

            }
        }


    private fun init() {
        utils.hideDialog()
        login = findViewById(R.id.login)
        etPhoneNumber = findViewById(R.id.etPhoneNumber)
        auth = FirebaseAuth.getInstance()


    }


    private fun signInWithPhoneAuthCredential(credential: PhoneAuthCredential) {
        auth.signInWithCredential(credential)
            .addOnCompleteListener(this) { task ->
                if (task.isSuccessful) {
                    // Sign in success, update UI with the signed-in user's information
                    SnToast.Builder()
                        .context(this)
                        .type(Type.SUCCESS)
                        .message("Authenticate Successfully!")
                        .build()


                  sendToMain()
                } else {
                    // Sign in failed, display a message and update the UI
                    Log.d("TAG", "signInWithPhoneAuthCredential: ${task.exception.toString()}")
                    if (task.exception is FirebaseAuthInvalidCredentialsException) {
                        // The verification code entered was invalid
                    }
                    // Update UI
                }
//
                utils.hideDialog()
            }
    }

    private fun sendToMain() {
        startActivity(Intent(this, MainActivity::class.java))
    }

    private val callbacks = object : PhoneAuthProvider.OnVerificationStateChangedCallbacks() {

        override fun onVerificationCompleted(credential: PhoneAuthCredential) {

            signInWithPhoneAuthCredential(credential)
        }

        override fun onVerificationFailed(e: FirebaseException) {

            if (e is FirebaseAuthInvalidCredentialsException) {
                // Invalid request
                Log.d("TAG", "onVerificationFailed: ${e.toString()}")
            } else if (e is FirebaseTooManyRequestsException) {
                // The SMS quota for the project has been exceeded
                Log.d("TAG", "onVerificationFailed: ${e.toString()}")
            }
//            mProgressBar.visibility = View.VISIBLE
            utils.showDialog(this@LoginActivity, "Failed to verify")
            // Show a message and update the UI
        }

        override fun onCodeSent(
            verificationId: String,
            token: PhoneAuthProvider.ForceResendingToken
        ) {
              val intent = Intent(this@LoginActivity, OTPActivity::class.java)
            intent.putExtra("OTP", verificationId)
            intent.putExtra("resendToken", token)
            intent.putExtra("phoneNumber", number)
            startActivity(intent)
//
            utils.hideDialog()
        }
    }


//    override fun onStart() {
//        super.onStart()
//        if (auth.currentUser != null) {
//            startActivity(Intent(this, MainActivity::class.java))
//        }
//    }







}








