import React, { useState, useEffect } from "react";

const Modale = () => {
    const[user,setUser] = useState(null);

    const getUser = async () => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        setUser(json)
      }
    
    useEffect(() => {
        getUser();
    },[])

    if (!user) {
    return <div>Chargement...</div>; 
    }

  return (
        <div className="modal fade" id="githubProfile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> 
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark text-white">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalLabel">Mon profil GitHub</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={user.avatar_url} alt="profile picture" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </div>
                    <div className="col-md-6">
                        <p>
                            {user.name}
                        </p>
                        <hr />
                        <p>
                            {user.location}
                        </p>
                        <hr />
                        <p>
                            {user.bio}
                        </p>
                        <hr />
                        <p>
                            Repositories: {user.public_repos}
                        </p>
                        <hr />
                        <p>
                            Followers: {user.followers}
                        </p>
                        <hr />
                        <p>
                            Following: {user.following}
                        </p>
                        <hr />
                    </div>
                    </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Modale;