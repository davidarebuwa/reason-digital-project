<template>
  <div class="help-section">
    <div class="help-section-content">
      <div class="content-title">How can we help you?</div>
      <div class="content-description">
        Let us know who you are and what you are looking for and we will get you
        to the right place.
      </div>
      <div class="content-selection-section">
        <div class="content-selection-section-item">
          I am
          <div class="content-selection-section-options">
            <select class="content-selection-section-options-select">
              <option value="individual">Individual</option>
              <option value="donor">Donor</option>
              <option value="partner">Partner</option>
              <option value="other">Other</option>
            </select>
          </div>
          and I want
          <div class="content-selection-section-options">
            <select class="content-selection-section-options-select">
              <option value="to donate">To donate</option>
              <option value="to learn more">To learn more</option>
            </select>
            <div class="content-selection-section-item-button">
              <button class="button">Start now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.help-section {
  width: 100%;
  height: auto;
  min-height: 300px;
  background-color: #ececec;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.help-section-content {
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
}

.content-title {
  display: flex;
  color: #000;
  font-weight: bold;
  font-size: 24px;
  text-align: left;
  margin-top: 10px;
  margin-left: 16px;
  align-self: flex-start;
}

.content-description {
  display: flex;
  color: #000;
  font-size: 18px;
  text-align: left;
  margin-left: 16px;
  align-self: flex-start;
}

.content-selection-section {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.content-selection-section-item {
  display: flex;
  color: #000;
  font-size: 20px;
  text-align: center;
  padding: 16px;
  margin-top: 16px;
  align-items: center;
  background-color: #fff;
  flex-basis: 100%;
}

.content-selection-section-options {
  display: flex;
  font-size: 24px;
  text-align: center;
  margin-top: 16px;
}

.content-selection-section-options-select {
  color: #ae3d4e;
  font-size: 16px;
  text-align: center;
  background-color: transparent;
  border: none;
  margin: 0 10px;
  margin-top: -12px;
  flex-basis: 50%;
}

.content-selection-section-item-button {
  display: flex;
  font-size: 24px;
  text-align: center;
  margin-top: 16px;
  align-items: center;
  flex-basis: 100%;
}

.content-selection-section-item-button button {
  width: 100%;
  height: 40px;
  color: #fff;
  background-color: #ae3d4e;
  border: 2px solid #fff;
  border-radius: 5px;
  font-weight: 550;
  cursor: pointer;
  margin-top: 16px;
}
</style>
