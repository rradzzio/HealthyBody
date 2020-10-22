package com.hackheroes.healthybody.repository.auth

import android.content.Context
import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.DocumentReference
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase
import kotlinx.coroutines.*
import javax.inject.Inject

class AuthRepository
@Inject
constructor(
    val appContext: Context,
    val firebaseAuth: FirebaseAuth,
    var fireStore: FirebaseFirestore
) {

    private val TAG: String = "AppDebug"

    private var repositoryJob: Job? = null

    private lateinit var userId: String

    private val personCollectionRef = Firebase.firestore.collection("users")

    protected val _isSignedIn: MutableLiveData<Boolean> = MutableLiveData()

    val isSignedIn: LiveData<Boolean>
        get() = _isSignedIn

    fun attemptRegistration(username: String, email: String, password: String) {
        if (email.isNotEmpty() && password.isNotEmpty()) {
            CoroutineScope(Dispatchers.IO).launch {
                try {
                    firebaseAuth.createUserWithEmailAndPassword(email, password)
                        .addOnSuccessListener {
                            Log.d(TAG, "attemptRegistration: successfully registered a new user")
                            userId = firebaseAuth.currentUser?.uid!!
                            val documentReference: DocumentReference = personCollectionRef.document(userId)
                            val user = mutableMapOf<String, Any>()
                            user["fName"] = username
                            user["email"] = email
                            user["weight"] = 70.00
                            user["sex"] = "m"
                            user["height"] = 175.00
                            user["age"] = 25
                            user["bmi"] = 22.9
                            documentReference.set(user).addOnSuccessListener {
                                Log.d(TAG, "attemptRegistration: user profile is created for: + $userId")
                            }
                            setIsAuthenticated(isAuthenticated = true)
                        }
                } catch (e: Exception) {
                    withContext(Dispatchers.Main) {
                        Log.e(TAG, "attemptRegistration: an error occurred")
                    }
                }
            }
        }
    }

    fun attemptLogin(email: String, password: String) {
        if (email.isNotEmpty() && password.isNotEmpty()) {
            CoroutineScope(Dispatchers.IO).launch {
                try {
                    firebaseAuth.signInWithEmailAndPassword(email, password)
                        .addOnSuccessListener {
                            Log.d(TAG, "attemptLogin: successfully logged in a user ${firebaseAuth.currentUser?.displayName}")
                            setIsAuthenticated(isAuthenticated = true)
                        }

                } catch (e: Exception) {
                    withContext(Dispatchers.Main) {
                        Log.e(TAG, "attemptLogin: an error occurred")
                    }
                }
            }
        }
    }

    private fun setIsAuthenticated(isAuthenticated: Boolean) {
        _isSignedIn.value = isAuthenticated
    }

    /*private suspend fun setUsernameAfterRegistration(username: String) {
        firebaseAuth.currentUser?.let { user ->
            val profileUpdates = UserProfileChangeRequest.Builder()
                .setPhotoUri(Uri.parse("android.resource://com.hackheroes.healthybody/${R.drawable.heart_hdpi}"))
                .setDisplayName(username)
                .build()

            withContext(Dispatchers.IO) {
                user.updateProfile(profileUpdates).addOnCompleteListener {
                    if(it.isSuccessful) {
                        Log.d(TAG, "setUsernameAfterRegistration: user profile updated")
                    } else {
                        Log.e(TAG, "setUsernameAfterRegistration: error")
                    }
                }
            }
            withContext(Dispatchers.Main) {
                Log.d(TAG, "attemptRegistration: successfully registered a user.")
            }

        }
    }*/

    /*fun attemptLogin(email: String, password: String): LiveData<DataState<AuthViewState>>{

        val loginFieldErrors = LoginFields(email, password).isValidForLogin()
        if(!loginFieldErrors.equals(LoginFields.LoginError.none())){
            return returnErrorResponse(loginFieldErrors, ResponseType.Dialog())
        }



        *//*return object: NetworkBoundResource<LoginResponse, AuthViewState>(
            Constants.isNetworkConnected(appContext)
        ) {
            override suspend fun handleApiSuccessResponse(response: ApiSuccessResponse<LoginResponse>) {
                Log.d(TAG, "handleApiSuccessResponse: ${response}")

                // Incorrect login credentials counts as a 200 response from server, so need to handle that
                if(response.body.response.equals(GENERIC_AUTH_ERROR)){
                    return onErrorReturn(response.body.errorMessage, true, false)
                }

                onCompleteJob(
                    DataState.data(
                        data = AuthViewState(
                            authToken = AuthToken(response.body.pk, response.body.token)
                        )
                    )
                )
            }

            override fun createCall(): LiveData<GenericApiResponse<LoginResponse>> {
                return openApiAuthService.login(email, password)
            }

            override fun setJob(job: Job) {
                repositoryJob?.cancel()
                repositoryJob = job
            }

        }.asLiveData()*//*
    }

    fun attemptRegistration(
        email: String,
        username: String,
        password: String,
        confirmPassword: String
    ): LiveData<DataState<AuthViewState>>{

        val registrationFieldErrors = RegistrationFields(email, username, password, confirmPassword).isValidForRegistration()
        if(!registrationFieldErrors.equals(RegistrationFields.RegistrationError.none())){
            return returnErrorResponse(registrationFieldErrors, ResponseType.Dialog())
        }

        *//*return object: NetworkBoundResource<RegistrationResponse, AuthViewState>(
            sessionManager.isConnectedToTheInternet()
        ){
            override suspend fun handleApiSuccessResponse(response: ApiSuccessResponse<RegistrationResponse>) {

                Log.d(TAG, "handleApiSuccessResponse: ${response}")

                if(response.body.response.equals(GENERIC_AUTH_ERROR)){
                    return onErrorReturn(response.body.errorMessage, true, false)
                }

                onCompleteJob(
                    DataState.data(
                        data = AuthViewState(
                            authToken = AuthToken(response.body.pk, response.body.token)
                        )
                    )
                )
            }

            override fun createCall(): LiveData<GenericApiResponse<RegistrationResponse>> {
                return openApiAuthService.register(email, username, password, confirmPassword)
            }

            override fun setJob(job: Job) {
                repositoryJob?.cancel()
                repositoryJob = job
            }

        }.asLiveData()*//*
    }


    private fun returnErrorResponse(errorMessage: String, responseType: ResponseType): LiveData<DataState<AuthViewState>>{
        Log.d(TAG, "returnErrorResponse: ${errorMessage}")

        return object: LiveData<DataState<AuthViewState>>(){
            override fun onActive() {
                super.onActive()
                value = DataState.error(
                    Response(
                        errorMessage,
                        responseType
                    )
                )
            }
        }
    }

    fun cancelActiveJobs(){
        Log.d(TAG, "AuthRepository: Cancelling on-going jobs...")
        repositoryJob?.cancel()
    }*/


}