import './Profile.css'

const Profile = ({ loggedUser }) => {

  return (
		<div class="container1">
		<div class="header-container1">
			<img src="https://s17.postimg.cc/ypm5ye95r/image.jpg" alt="" class="header-image" />
			<div class="header">
					<path d="M0 0h24v24H0z" fill="none"/>
					<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
	
				<svg fill="#ffffff" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" class="u-float-right header-icon">
					<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
					<path d="M0 0h24v24H0z" fill="none"/>
				</svg>
				<h1 class="main-heading">Welcome {loggedUser.username}</h1>
				<span class="tag">Manager</span>
				<span class="tag">{loggedUser.email}</span>
				<div class="stats">
					<span class="stat-module">
						Activities <span class="stat-number">6</span>
					</span>
					<span class="stat-module">
						Event <span class="stat-number">29</span>
					</span>
				</div>
			</div> 
		</div>
		
		<div class="overlay-header"></div>
		
		<div class="body">
			<img src={loggedUser.image} width='80px' alt="logguedUser" class="body-image" />
			
			<span class="body-stats"><span></span></span>
			<span class="body-stats"><span></span></span>
			<div class="u-clearfix"></div>
			<div class="body-info">
			</div>
		</div>
	</div>


      )
  }

      export default Profile



