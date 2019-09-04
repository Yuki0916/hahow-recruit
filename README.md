# Hahow - recruit

-   this project created from [Create React App](https://github.com/facebook/create-react-app)
-   Using `npm start` to start project

---

## File Structure

```
    .
    +-- scr
    |   +-- action_creators // redux action相關的檔案放入此資料夾中
    |   +-- components  // 這邊元件不會與直接與redux有所連接
    |   +-- containers  // container主要跟redux做串接，以及傳遞props至component
    |   +-- reducers    // redux reducer相關檔案放在此資料夾中
    |   +-- App.js
    |   +-- configureStore.js // 將所有reducer匯集成一個設定檔，applyMiddleware以及devtool也是在這邊compose
    |   +-- index.js
    |   +-- reset.css
```

## Library

-   radium：css in js 的 library，能夠利用串接的方式組成 css style
-   react-router-dom：react-router
-   redux：將所有資料整合在一個 store 之中
-   redux-thunk：用於處理非同步的 action
-   redux-devtools-extension：能夠使用瀏覽器的 redux-devtool 進行 debug
