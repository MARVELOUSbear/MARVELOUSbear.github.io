const onClickTriviaButton = () => {
  const alertContainer = document.querySelector("#alertContainer");
  const selectedOption = document.querySelector(".form-check-input:checked");
  // const alertMessage = document.createElement('div');
  let message;
  if (!selectedOption) {
    message = "You must choose an option before submitting!";
    alertContainer.innerHTML =
      '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>' +
      message +
      '</strong> You should check in on some of those fields below.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
  } else if (selectedOption.id == "foodRadio2") {
    message = "Bingo!";
    alertContainer.innerHTML =
      '<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>' +
      message +
      '</strong> You have selected the correct answer.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
  } else {
    message = "Wrong answer!";
    alertContainer.innerHTML =
      '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>' +
      message +
      '</strong> You have missed the correct answer.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
  }
};

document
  .querySelector("#triviaButton")
  .addEventListener("click", onClickTriviaButton);
