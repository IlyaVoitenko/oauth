import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [token, setToken] = useState("");
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  useEffect(() => {
    const asyncFetch = async () => {
      const token = await getAccessTokenSilently();
      return setToken(token);
    };
    asyncFetch();
  }, [user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>name :{user.name}</h2>
        <p>email :{user.email}</p>
        <p>token :{token}</p>
      </div>
    )
  );
};

export default Profile;
