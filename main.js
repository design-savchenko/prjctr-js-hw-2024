"use strict";

class SimpsonsCharacter {
  #catchphrase;

  constructor(name, age, job, img) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.img = img;
    this.#catchphrase = "Д'оу!";
  }

  introduce() {
    return `Привіт, я ${this.name}, мені ${this.age} років, і я працюю як ${this.job}.`;
  }

  getCatchphrase() {
    return this.#catchphrase;
  }

  setCatchphrase(phrase) {
    this.#catchphrase = phrase;
  }
}

class SimpsonsFamilyMember extends SimpsonsCharacter {
  constructor(name, age, job, img, hobby) {
    super(name, age, job, img);
    this.hobby = hobby;
  }

  doPrank() {
    return `${this.name} робить розіграш!`;
  }
}

class Homer extends SimpsonsFamilyMember {
  #favoriteFood;

  constructor() {
    super("Гомер", 39, "Працівник на АЕС", "./img/homer.jpg", "Їсти пончики");
    this.#favoriteFood = "Пончики";
    this.setCatchphrase("Д'оу!");
  }

  specialAction() {
    return `${this.name} їсть свої улюблені ${this.#favoriteFood}.`;
  }
}

class Bart extends SimpsonsFamilyMember {
  #skateboardTricks;

  constructor() {
    super("Барт", 10, "Учень", "./img/bart.jpg", "Кататися на скейтборді");
    this.#skateboardTricks = ["Оллі", "Кікфліп", "Грайнд"];
    this.setCatchphrase("Ай, карамба!");
  }

  specialAction() {
    return `${this.name} виконує трюк: ${
      this.#skateboardTricks[
        Math.floor(Math.random() * this.#skateboardTricks.length)
      ]
    }!`;
  }
}

class Lisa extends SimpsonsCharacter {
  #saxophoneBrand;

  constructor() {
    super("Ліза", 8, "Учениця", "./img/lisa.jpg");
    this.#saxophoneBrand = "Ямаха";
    this.setCatchphrase("Я буду у себе!");
  }

  specialAction() {
    return `${this.name} грає джаз на саксофоні ${this.#saxophoneBrand}.`;
  }
}

class Marge extends SimpsonsCharacter {
  #hairHeight;

  constructor() {
    super("Мардж", 36, "Домогосподарка", "./img/marge.jpg");
    this.#hairHeight = "75 см";
    this.setCatchphrase("ММмммм");
  }

  specialAction() {
    return `${this.name} готує вечерю для сім'ї.`;
  }
}

const characters = {
  homer: new Homer(),
  bart: new Bart(),
  lisa: new Lisa(),
  marge: new Marge(),
};

document.addEventListener("DOMContentLoaded", function () {
  const characterSelect = document.getElementById("character");
  const showCharacterBtn = document.getElementById("show-character");
  const deleteCharacterBtn = document.getElementById("delete");
  const characterImg = document.getElementById("character-img");
  const characterTable = document.getElementById("character-table");
  const characterSpecial = document.querySelector(".character-special");
  const characterInfo = document.querySelector(".character-info");
  const characterIntro = document.getElementById("character-intro");
  const errorMsg = document.getElementById("error-msg");

  const elementsToCheck = {
    characterSelect,
    showCharacterBtn,
    deleteCharacterBtn,
    characterImg,
    characterTable,
    characterSpecial,
    characterInfo,
    characterIntro,
    errorMsg,
  };

  const missingElements = [];
  for (const [key, element] of Object.entries(elementsToCheck)) {
    if (!element) {
      missingElements.push(key);
    }
  }

  if (missingElements.length > 0) {
    console.error(
      `Відсутні наступні DOM-елементи: ${missingElements.join(", ")}`
    );
    return;
  }

  errorMsg.style.display = "none";

  showCharacterBtn.addEventListener("click", function () {
    const selectedCharacter = characterSelect.value;

    if (!selectedCharacter) {
      errorMsg.style.display = "flex";
      return;
    }

    errorMsg.style.display = "none";
    characterInfo.style.opacity = "0";

    setTimeout(() => {
      characterInfo.style.display = "flex";
      const char = characters[selectedCharacter];

      characterImg.src = char.img;
      characterImg.style.display = "block";

      characterTable.innerHTML = `
          <tr>
              <td>${char.name}</td>
              <td>${char.age}</td>
              <td>${char.job}</td>
              <td>${char.getCatchphrase()}</td>
          </tr>
      `;

      characterSpecial.innerHTML = `
        <div class="frame-info">
          <i class='bx bx-info-circle'></i>
          <p> ${char.specialAction()}</p>
        </div>`;

      characterIntro.innerHTML = `<p><strong>${char.introduce()}</strong></p>`;

      characterInfo.style.opacity = "1";
    }, 200);
  });

  deleteCharacterBtn.addEventListener("click", function () {
    characterSelect.value = "";
    characterImg.src = "";
    characterImg.style.display = "none";
    characterInfo.style.display = "none";
    characterTable.innerHTML = "";
    characterSpecial.innerHTML = "";
    characterIntro.innerHTML = "";
    errorMsg.style.display = "none";
  });

  characterSelect.addEventListener("change", function () {
    errorMsg.style.display = "none";
  });

  characterImg.style.display = "none";
});
