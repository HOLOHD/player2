const SERVER="http://localhost:8000"
const HEADERS = {
  //"Authorization":'Basic '+btoa("pi"+':'+"pi"),
  "Content-Type": "application/json"
}

  // const testAssets = [

  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object",
  //   "The asset name to show in media object"
  
  // ]

const PlayerApi = {
    getAssets: () =>
      (
        fetch(`${SERVER}/api/files`, {
            headers: HEADERS
        }).then(res => res.json())
        .then(
            res => {
              return Promise.resolve(res.data.files || [])
            }
        )
        .catch(
            error => {
              return Promise.reject(error)
            }
        )
      ),
	  
    playAsset: (name) =>
      (
        fetch(`${SERVER}/api/kioskui/play?file=${name}`, {
            method: "POST",
            headers: HEADERS
        })
        .then(res => res.json())
        .then(
            res => (
              Promise.resolve(res.data)
            )
        )
        .catch(
            error => (
              Promise.reject(error)
            )
        )
      ),
    hideWindow: () =>
      (
        fetch(`${SERVER}/api/kioskui/hide`, {
            method: "POST",
            headers: HEADERS
        })
        .then(res => res.json())
        .then(
            res => (
              Promise.resolve(res.data)
            )
        )
        .catch(
            error => (
              Promise.reject(error)
            )
        )
      )
}

export {PlayerApi,SERVER}
