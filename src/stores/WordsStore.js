import { action, makeAutoObservable, observable } from "mobx";

class WordsStore {
  @observable words = [];
  @observable error = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action fetchData = () => {
    this.isLoading = true;

    return fetch("./api/words")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((response) => {
        this.words = response;
        this.isLoading = false;
      })
      .catch((error) => {
        this.error = error;
        this.isLoading = false;
      });
  };

  @action addWord = (value) => {
    this.isLoading = true;

    const newWord = {
      id: value.id,
      english: value.english,
      transcription: value.transcription,
      russian: value.russian,
      tags: value.tags,
    };

    return fetch("./api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json: charset=utf-8",
      },
      body: JSON.stringify(newWord),
    })
      .then(() => {
        this.words.push(newWord);
        this.isLoading = false;
      })
      .catch((error) => console.log(error.message));
  };

  @action updateWord = (value, id) => {
    this.isLoading = true;

    const newWord = {
      english: value.english,
      transcription: value.transcription,
      russian: value.russian,
      tags: value.tags,
    };

    return fetch(`api/words/${id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json: charset=utf-8",
      },
      body: JSON.stringify(newWord),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then(() => {
        this.isLoading = false;
      })
      .catch((error) => console.log(error.message));
  };

  @action deleteWord = (id) => {
    this.isLoading = true;

    return fetch(`./api/words/${id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json: charset=utf-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then(() => {
        this.isLoading = false;
      })
      .catch((error) => console.log(error.message));
  };
}

export default WordsStore;
