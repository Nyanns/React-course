import PropTypes from "prop-types";

function Instagram({ name, username, bio, isVerified, children }) {
  return (
    <div className="instagram-container">
      {/* Detailed Card */}
      <div className="instagram-card">
        <dl>
          <dt>Name:</dt>
          <dd>{name}</dd>
          <dt>Username:</dt>
          <dd>{username}</dd>
          <dt>Bio:</dt>
          <dd>{bio}</dd>
          <dt>Verified:</dt>
          <dd>{isVerified ? "Yes" : "No"}</dd>
        </dl>
      </div>

      {/* Simplified Card */}
      <div className="instagram-card">
        <h1>{name}</h1>
        <p>
          @{username} {isVerified && <span>✔</span>}
        </p>
        <p>{bio}</p>
      </div>

      {/* Additional Content Passed as Children */}
      <div className="instagram-children">{children}</div>
    </div>
  );
}

Instagram.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  bio: PropTypes.string,
  isVerified: PropTypes.bool.isRequired,
  children: PropTypes.node, // Properti children bisa berupa elemen apapun
};

export default Instagram;
