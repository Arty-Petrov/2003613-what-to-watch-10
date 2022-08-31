import { ErrorMessages } from '../../util/const';

type LoginFormErrorMessageProps = {
  errorType: string,
}

const LoginFormErrorMessage = (
  {errorType = ErrorMessages.FalseLoginCombination}: LoginFormErrorMessageProps): JSX.Element =>
{
  switch (errorType) {
    case ErrorMessages.EmptyEmail:
      return (
        <div className="sign-in__message">
          <p>Please enter a valid email address</p>
        </div>
      );
      break;
    case ErrorMessages.EmptyPassword:
      return (
        <div className="sign-in__message">
          <p>Please enter a valid password</p>
        </div>
      );
      break;
    default:
      return (
        <div className="sign-in__message">
          {'We can’t recognize this email'}
          <br/>
          {'and password combination. Please try again.'}
        </div>
      );
      break;
  }
};

export default LoginFormErrorMessage;
