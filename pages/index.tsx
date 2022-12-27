import { useContext, useEffect } from "react";

import { GeneralContext } from "../context";

const IndexPage = () => {
  const { auth, walletInformation, profileInformation } =
    useContext(GeneralContext);

  useEffect(() => {
    if (!walletInformation) return;
    if (auth.status !== "resolved") return;
  }, [auth, walletInformation]);

  if (auth.status !== "resolved") {
    return <div>Krebit is loading</div>;
  }

  if (auth?.isAuthenticated) {
    return <div>username: {profileInformation.profile.name}</div>;
  }

  return <button onClick={() => auth.connect()}>connect</button>;
};

export default IndexPage;
