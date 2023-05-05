<template>
    <div class="services-section">
        <div class="services-section-content">
             <div class="content-title">What do we do?</div>
      <div class="content-description">
        You might not have heard of us, but we're the people behind the following programmes:
      </div>
        <div class="services-cards-section">
            <div class="services-card">
                <div class="services-card-title">Get online week</div>
                <div class="services-card-description">
                    Lorem ipsum dolor sit amet
                </div>
                <div class="services-card-button">
                    <button class="button">
                        <a href="/details">Learn more</a>
                        </button>
                </div>
                </div>
                <div class="services-card">
                    <div class="services-card-title">Learn my way</div>
                    <div class="services-card-description">
                    Lorem ipsum dolor sit amet
                    </div>
                    <div class="services-card-button">
                        <button class="button">
                             <a href="/details">Learn more</a>
                        </button>
                    </div>
                </div>
                <div class="services-card">
                    <div class="services-card-title">Make it click</div>
                    <div class="services-card-description">
                    Lorem ipsum dolor sit amet
                    </div>
                    <div class="services-card-button">
                        <button class="button">
                             <a href="/details">Learn more</a>
                        </button>
                    </div>
                </div>
                <div class="services-card">
                    <div class="services-card-title">Digital you</div>
                    <div class="services-card-description">
                    Lorem ipsum dolor sit amet
                    </div>
                    <div class="services-card-button">
                        <button class="button">
                             <a href="/details">Learn more</a>
                        </button>
                    </div>
                </div>
        </div>
        <div class="content-button">
            <button class="button">
                 <a href="/details">
                    More about what we do
                 </a>
            </button>
            </div>
    </div>
    </div>
</template>

<script>
</script>

<style scoped>
.services-section {
    width: auto;
    height: 100vh;
    background-color: #547B8D;
    display: flex;
    justify-content: center;
    align-items: center;
}

.services-section-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.content-title {
    width: 100%;
    height: 100px;
    display: flex;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin-top: 10px;
    margin-left: 16px;
}

.content-description {
    width: 100%;
    display: flex;
    color: #fff;
    font-size: 18px;
    text-align: center;
    margin-left: 16px;
}

.content-button {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.services-cards-section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.services-card {
    width: 300px;
    height: 300px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
}

.services-card-title {
    width: 100%;
    height: 100px;
    color: #000;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin-top: 10px;
}

.services-card-description {
    width: 100%;
    color: #000;
    font-size: 16px;
    text-align: center;
}

.services-card-button {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.button {
    width: 200px;
    height: 50px;
    background-color: #fff;
    color: #AE3D4E;
    border: 2px solid #AE3D4E;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

.button a {
    text-decoration: none;
    color: #AE3D4E;
}

.button:hover {
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
}

</style>