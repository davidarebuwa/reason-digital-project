<template>
    <div class="cover-image-section">
        <div class="cover-image-section-content">
            <div class="content-title">
               Get online week 2023
            </div>
            <div class="content-description">
                Lorem ipsum dolor sit amet consectur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div class="content-button">
            <button>
                <router-link to="/details">Get involved now!</router-link>
                </button>
    </div>
    </div>
    </div>
</template>

<script>
</script>


<style scoped>
.cover-image-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/cover-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}

.cover-image-section-content {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  max-width: 80%;
}


.content-title {
    width: 100%;
    height: 100px;
    display: flex;
    color: #fff;;
    font-weight: bold;
    font-size: 48px;
    text-align: left;
    margin-top: 10%;
    margin-left: 35px;
}


.content-description {
    width: 100%;
    display: flex;
    margin-top: 16px;
	font-size: 18px;
	line-height: 24px;
    margin-left: 35px;
    color: #fff;
}

.content-button {
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 20px;
    margin-left: 35px;
}

.content-button button {
    width: 200px;
    height: 50px;
    background-color: #fff;
    color: #AE3D4E;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 550;
    cursor: pointer;
}

.content-button button a {
    text-decoration: none;
    color: #AE3D4E;
}

.content-button button:hover {
    background-color: #ccc;
    color: #AE3D4E;
}

@media only screen and (max-width: 768px) {
  .content-title {
    font-size: 32px;
    margin-top: 5%;
    margin-left: 15px;
  }
  
  .content-description {
    font-size: 16px;
    margin-left: 15px;
  }
  
  .content-button {
    margin-left: 15px;
  }
  
  .content-button button {
    width: 150px;
    height: 40px;
    font-size: 1rem;
  }
}


</style>