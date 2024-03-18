document.getElementsByTagName("body")[0].innerHTML += `
<style>
    h1 {
        font-size: 50px;
      }
      .action {
        margin-top: 20px;
        padding: 10px 20px 10px 20px;
        font-size: 20px;
        border-radius: 20px;
        outline: none;
        border: none;
      }

      li {
        transition: 0.3s;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
      }

      li:hover {
        background-color: #f4f4f4;
        color: black;
      }

    .actions {
        display: flex;
        align-items: center;
      }
      .cta {
        margin-top: 20px;
        padding: 10px 20px 10px 20px;
        font-size: 20px;
        border-radius: 20px;
        outline: none;
        border: none;
        background-color: #f0f0f0;
        margin-left: 10px;
      }

      </style>
`;
