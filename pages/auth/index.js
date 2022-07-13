import { useState } from "react";
import SignInForm from "../../components/user/auth/SignInForm";
import SignUpForm from "../../components/user/auth/SignUpForm";

export default function Auth(props) {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <>
      {hasAccount ? (
        <SignInForm setHasAccount={setHasAccount} />
      ) : (
        <SignUpForm setHasAccount={setHasAccount} />
      )}
    </>
  );
}
