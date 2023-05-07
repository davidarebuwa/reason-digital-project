<template>

    <div class="split-cover-section">
        <div class="split-cover-section-left">
            <img src="../assets/split-cover-image-left.jpg" alt="split-cover-image-left" class="split-cover-image-left">
        </div>
        <div class="split-cover-section-right">
            <div class="split-cover-section-right-content">
                <div class="content-title">
                    We are a social change charity, helping people to improve their lives through digital.
                </div>
                <div class="content-description">
                    We tackle the most pressing social issues of our time, working with partners in thousands of communities across the UK and further afield.
                </div>
                <div class="content-button">
                    <button class="button">
                      Learn more about us
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped>
.split-cover-section {
    width: auto;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.split-cover-section-left {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.split-cover-section-right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.split-cover-section-right-content {
    width: 100%;
    height: 100%;
    background-color: #557F77;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.split-cover-image-left {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content-title {
    display: flex;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    text-align: left;
    margin-top: 10%;
    margin-left: 35px;
}


.content-description {
    display: flex;
    margin-top: 16px;
    font-size: 18px;
    text-align: left;
    line-height: 24px;
    margin-left: 35px;
    margin-right: 10px;
    color: #fff;
}

.content-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    margin-left: 35px;
    padding: 8px;
}

.content-button button {
    width: 250px;
    height: 50px;
    color: #fff;
    background-color: #557F77;
    border: 2px solid #fff;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 550;
    cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .split-cover-section {
    height: auto;
    flex-direction: column;
  }

  .split-cover-section-left {
    width: 100%;
    height: 50vh;
  }

  .split-cover-section-right {
    width: 100%;
    height: 50vh;
  }

  .content-title {
    margin-top: 5%;
    margin-left: 5%;
    font-size: 20px;
  }

  .content-description {
    margin-top: 8px;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 16px;
    line-height: 20px;
    }

    .content-button {
        margin-top: 8px;
        margin-left: 5%;
        padding: 8px;
    }

    .content-button button {
        width: 200px;
        height: 40px;
        font-size: 1rem;
    }


}

</style>