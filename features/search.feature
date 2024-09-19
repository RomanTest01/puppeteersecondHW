Feature: Tests for GoToTheCinema
    Scenario: Booking two tickets tomorrow
        Given пользователь находится на странице "/client/index.php"
        When пользователь переходит на завтрашний день
        When пользователь выбирает время сеанса
        When пользователь выбирает место в зале
        When пользователь выбирает второе место в зале
        When пользователь нажимает Забронировать
        Then пользователь видит текст "Вы выбрали билеты:"

    Scenario: Should booking ticket the day after and get a code
        Given user is on page "/client/index.php"
        When user choose date
        When user choose movie time
        When user choose seat
        When user choose one more seat
        When user click on the reserve button
        When user click on the get code button
        Then user get the code and text "Электронный билет"

    Scenario: Should not be available button
        Given user is on page "/client/index.php"
        When user choose date
        When user choose movie time
        When user choose already selected seat
        Then button for reserving is inactive "true"