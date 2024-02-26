import EmailSignInForm from '../../components/EmailSignInForm'
import GoogleSignInButton from '../../components/GoogleSignInButton'

const authErrorMessage = {
  Signin: 'Try signing in with a different account.',
  OAuthSignin: 'Try signing in with a different account.',
  OAuthCallback: 'Try signing in with a different account.',
  OAuthCreateAccount: 'Try signing in with a different account.',
  EmailCreateAccount: 'Try signing in with a different account.',
  Callback: 'Try signing in with a different account.',
  OauthAccountNotLinked: 'To confirm your identity, sign in with the same account you used originally.',
  EmailSign: 'Check your email inbox.',
  CredentialsSignin: 'Sign in failed. Check the details you provided are correct.',
  SessionRequired: 'Please sign in to access this page.',
  default: 'Unable to sign in.'
}

const getAuthErrorMessage = error => {
  if (!error) return
  return authErrorMessage[error]
  ? authErrorMessage[error]
  : authErrorMessage.default
}

const SignInPage = ({ searchParams }) => {
  const { callbackUrl = '/', error } = searchParams
  const authError = getAuthErrorMessage(error)

  return (
    <section className="py-24">
      <div className="flex flex-col w-full max-w-2xl px-4 mx-auto sm:px-6">
        <div className="relative mt-12 sm:mt-16">
          <h1 className='text-2xl font-medium tracking-tight text-center'>
            Sign in to your account
          </h1>
        </div>
        <div className="flex-auto p-16 mx-4 mt-10 text-sm text-black bg-white">
          {authError && (
            <div className="px-3 py-2 mb-10 text-white rounded-md bg-rose-500">
              <p>{authError}</p>
            </div>
          )}

          <EmailSignInForm callbackUrl={callbackUrl} />
          <div className="flex items-center w-full mx-auto my-10 justify-evenly">
            or
          </div>
          <GoogleSignInButton callbackUrl={callbackUrl} />
        </div>
      </div>
    </section>
  )
}

export default SignInPage