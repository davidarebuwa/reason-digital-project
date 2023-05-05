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
    width: auto;
    height: 70vh;
    background-image: url('../assets/cover-image.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

}

.cover-image-section-content {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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



</style>