<template>
  <footer class="footer-section">
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
  </footer>
</template>

<script>
</script>

<style scoped>
.footer {
  padding: 50px 0;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-title {
  font-size: 36px;
  margin-top: 0;
  margin-bottom: 20px;
}

.footer-description {
  font-size: 24px;
  margin-bottom: 50px;
  text-align: center;
}

.services-cards-section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.services-card {
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  transition: all 0.3s ease;
}

.services-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.16);
}

.services-card-title {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.services-card-description {
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
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
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #AE3D4E;
  color: #fff;
  border: 2px solid #AE3D4E;
}

@media screen and (max-width: 600px) {
  .services-card {
    width: 90%;
    height: auto;
    margin: 10px auto;
  }
}

@media screen and (min-width: 600px) {
  .footer {
    padding: 80px 0;

  }

  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-description {
    width: 40%;
    margin-bottom: 0;
    text-align: left;
  }
 .footer-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #547B8D;
  }

  .services-section-content {
    width: 80%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding: 50px 0;
  }

  .content-title {
    font-size: 36px;
    margin-top: 0;
  }

  .content-description {
    font-size: 24px;
    margin-bottom: 50px;
  }

  .services-cards-section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-wrap: wrap;
    margin-bottom: 50px;
  }

  .services-card {
    width: 30%;
    height: 400px;
    background-color: #fff; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
  }

  .services-card-title {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .services-card-description {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .content-button {
    margin-bottom: 50px;
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
    transition: all 0.3s ease;
  }

  .button:hover {
    background-color: #AE3D4E;
    color: #fff;
    border: 2px solid #AE3D4E;
  }

  .button a {
    color: #AE3D4E;
    text-decoration: none;
  }

  
}

 </style>