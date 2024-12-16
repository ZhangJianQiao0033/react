import React, { PureComponent } from 'react'

export class Profile extends PureComponent {
  UNSAFE_componentWillMount() {
    console.log("profile UNSAFE_componentWillMount");
  }
  render() {
    return (
      <div>Profile</div>
    )
  }
}

export default Profile