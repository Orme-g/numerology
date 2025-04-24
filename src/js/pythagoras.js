"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const day = document.querySelector(".day"),
        month = document.querySelector(".month"),
        year = document.querySelector(".year"),
        calculateButton = document.querySelector(".calculate_button"),
        cellOnes = document.querySelector(".numbers_one span"),
        cellTwos = document.querySelector(".numbers_two span"),
        cellThrees = document.querySelector(".numbers_three span"),
        cellFours = document.querySelector(".numbers_four span"),
        cellFives = document.querySelector(".numbers_five span"),
        cellSixs = document.querySelector(".numbers_six span"),
        cellSevens = document.querySelector(".numbers_seven span"),
        cellEights = document.querySelector(".numbers_eight span"),
        cellNines = document.querySelector(".numbers_nine span"),
        firstNumber = document.querySelector(".first_additional span"),
        secondNumber = document.querySelector(".second_additional span"),
        thirdNumber = document.querySelector(".third_additional span"),
        fourthNumber = document.querySelector(".fourth_additional span"),
        fateNumber = document.querySelector(".fate_number span"),
        cellTemper = document.querySelector(".numbers_temper span"),
        cellTarget = document.querySelector(".numbers_target span"),
        cellFamily = document.querySelector(".numbers_family span"),
        cellHabits = document.querySelector(".numbers_habits span"),
        cellSelflove = document.querySelector(".numbers_selflove span"),
        cellRoutine = document.querySelector(".numbers_routine span"),
        cellTalent = document.querySelector(".numbers_talent span"),
        cellSoul = document.querySelector(".numbers_soul span");

    day.addEventListener("input", () => {
        validate(day, 32, 0, 2);
    });

    month.addEventListener("input", () => {
        validate(month, 13, 0, 2);
    });

    year.addEventListener("input", () => {
        validate(year, 2023, 1500, 4);
    });

    calculateButton.addEventListener("click", (e) => {
        e.preventDefault();
        clearFields();
        let dayData = day.value,
            monthData = month.value,
            yearData = year.value,
            totalDataArray,
            dayDataArray,
            monthDataArray,
            yearDataArray,
            firstAdditionalNumber,
            firstAdditionalNumberArray,
            fourthAdditionalNumberArray,
            totalSummArray,
            secondAdditionalNumber,
            secondAdditionalNumberArray,
            doubledFirstBirthdayNumber,
            thirdAdditionalNumber,
            thirdAdditionalNumberArray,
            fourthAdditionalNumber,
            allNumbersForTable,
            ones = "",
            twos = "",
            threes = "",
            fours = "",
            fives = "",
            sixs = "",
            sevens = "",
            eights = "",
            nines = "";

        if (dayData && monthData && yearData) {
            console.log("Ok");
            dayDataArray = Array.from(dayData);
            monthDataArray = Array.from(monthData);
            yearDataArray = Array.from(yearData);
            totalDataArray = [...dayDataArray, ...monthDataArray, ...yearDataArray];

            totalDataArray = totalDataArray.map((item) => {
                return +item;
            });

            firstAdditionalNumber = totalDataArray.reduce((sum, current) => sum + current);
            firstAdditionalNumberArray = [...("" + firstAdditionalNumber)];

            totalSummArray = [...("" + firstAdditionalNumber)];
            totalSummArray = totalSummArray.map((item) => {
                return +item;
            });

            secondAdditionalNumber = totalSummArray.reduce((sum, current) => sum + current);
            secondAdditionalNumberArray = [...("" + secondAdditionalNumber)];
            secondAdditionalNumberArray = secondAdditionalNumberArray.map((item) => {
                return +item;
            });

            if (totalDataArray[0] != 0) {
                doubledFirstBirthdayNumber = totalDataArray[0] * 2;
            } else {
                doubledFirstBirthdayNumber = totalDataArray[1] * 2;
            }

            thirdAdditionalNumber = Math.abs(firstAdditionalNumber - doubledFirstBirthdayNumber);

            thirdAdditionalNumberArray = [...("" + thirdAdditionalNumber)];

            thirdAdditionalNumberArray = thirdAdditionalNumberArray.map((item) => {
                return +item;
            });

            fourthAdditionalNumber = thirdAdditionalNumberArray.reduce(
                (sum, current) => sum + current
            );
            fourthAdditionalNumberArray = [...("" + fourthAdditionalNumber)];

            allNumbersForTable = [
                ...totalDataArray,
                ...firstAdditionalNumberArray,
                ...secondAdditionalNumberArray,
                ...thirdAdditionalNumberArray,
                ...fourthAdditionalNumberArray,
            ];

            allNumbersForTable = allNumbersForTable.map((item) => {
                return item.toString();
            });

            // Filling up table

            firstNumber.textContent = firstAdditionalNumber;
            secondNumber.textContent = secondAdditionalNumber;
            thirdNumber.textContent = thirdAdditionalNumber;
            fourthNumber.textContent = fourthAdditionalNumber;

            allNumbersForTable.forEach((item) => {
                switch (item) {
                    case "1":
                        ones = ones + item;
                        cellOnes.textContent = ones;
                        break;
                    case "2":
                        twos = twos + item;
                        cellTwos.textContent = twos;
                        break;
                    case "3":
                        threes = threes + item;
                        cellThrees.textContent = threes;
                        break;
                    case "4":
                        fours = fours + item;
                        cellFours.textContent = fours;
                        break;
                    case "5":
                        fives = fives + item;
                        cellFives.textContent = fives;
                        break;
                    case "6":
                        sixs = sixs + item;
                        cellSixs.textContent = sixs;
                        break;
                    case "7":
                        sevens = sevens + item;
                        cellSevens.textContent = sevens;
                        break;
                    case "8":
                        eights = eights + item;
                        cellEights.textContent = eights;
                        break;
                    case "9":
                        nines = nines + item;
                        cellNines.textContent = nines;
                        break;
                }
            });

            cellTemper.textContent = threes.length + fives.length + sevens.length;
            cellTarget.textContent = ones.length + fours.length + sevens.length;
            cellFamily.textContent = twos.length + fives.length + eights.length;
            cellHabits.textContent = threes.length + sixs.length + nines.length;
            cellSoul.textContent = ones.length + fives.length + nines.length;
            cellTalent.textContent = sevens.length + eights.length + nines.length;
            cellRoutine.textContent = fours.length + fives.length + sixs.length;
            cellSelflove.textContent = ones.length + twos.length + threes.length;

            if (secondAdditionalNumber < 10 || secondAdditionalNumber == 11) {
                fateNumber.textContent = secondAdditionalNumber;
            } else {
                fateNumber.textContent = secondAdditionalNumberArray.reduce(
                    (sum, current) => sum + current
                );
            }
        } else {
            console.error("Error");
        }

        // Functions

        function clearFields() {
            let cellsArray = [
                cellOnes,
                cellTwos,
                cellThrees,
                cellFours,
                cellFives,
                cellSixs,
                cellSevens,
                cellEights,
                cellNines,
                cellTemper,
                cellTarget,
                cellFamily,
                cellHabits,
                cellSelflove,
                cellRoutine,
                cellTalent,
                cellSoul,
            ];
            cellsArray.forEach((item) => {
                item.textContent = "__";
            });
        }
    });

    function validate(field, num1, num2, num3) {
        if (field.value < num1 && field.value > num2 && field.value.length == num3) {
            field.classList.remove("is-invalid");
            field.classList.add("is-valid");
        } else {
            field.classList.add("is-invalid");
            field.classList.remove("is-valid");
        }
        checkAttribute();
    }

    function checkAttribute() {
        if (
            day.classList.contains("is-valid") &&
            month.classList.contains("is-valid") &&
            year.classList.contains("is-valid")
        ) {
            calculateButton.disabled = false;
        } else {
            calculateButton.disabled = true;
        }
    }
});
