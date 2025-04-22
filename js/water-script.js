//Задача 1
document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const waterUsedInput = document.getElementById('waterUsed');
    const pricePerCubeInput = document.getElementById('pricePerCube');
    const calculateButton = document.getElementById('calculateWater');
    const usedWaterOutput = document.getElementById('usedWaterOutput');
    const waterPriceOutput = document.getElementById('waterPriceOutput');
    const totalWaterCostOutput = document.getElementById('totalWaterCost');
    
    // Функция расчета
    function calculateWaterBill() {
        const waterUsed = parseFloat(waterUsedInput.value);
        const pricePerCube = parseFloat(pricePerCubeInput.value);
        
        if (isNaN(waterUsed) || isNaN(pricePerCube)) {
            alert('Пожалуйста, введите корректные числовые значения');
            return;
        }
        
        const totalWaterCost = waterUsed * pricePerCube;
        
        // Обновляем результаты
        usedWaterOutput.textContent = waterUsed;
        waterPriceOutput.textContent = pricePerCube;
        totalWaterCostOutput.textContent = totalWaterCost.toFixed(2);
    }
    
    // Вычисляем начальное значение
    calculateWaterBill();
    
    // Добавляем обработчик события
    calculateButton.addEventListener('click', calculateWaterBill);
});

//Задача 2
document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const baseFareInput = document.getElementById('baseFare');
    const pricePerKmInput = document.getElementById('pricePerKm');
    const distanceInput = document.getElementById('distance');
    const calculateButton = document.getElementById('calculateTaxi');
    const baseFareOutput = document.getElementById('baseFareOutput');
    const distanceOutput = document.getElementById('distanceOutput');
    const distanceCostOutput = document.getElementById('distanceCostOutput');
    const totalTaxiCostOutput = document.getElementById('totalTaxiCost');
    
    // Функция расчета
    function calculateTaxiFare() {
        const baseFare = parseFloat(baseFareInput.value);
        const pricePerKm = parseFloat(pricePerKmInput.value);
        const distance = parseFloat(distanceInput.value);
        
        if (isNaN(baseFare) || isNaN(pricePerKm) || isNaN(distance)) {
            alert('Пожалуйста, введите корректные числовые значения');
            return;
        }
        
        const distanceCost = distance * pricePerKm;
        const totalTaxiCost = baseFare + distanceCost;
        
        // Обновляем результаты
        baseFareOutput.textContent = baseFare;
        distanceOutput.textContent = distance;
        distanceCostOutput.textContent = distanceCost.toFixed(2);
        totalTaxiCostOutput.textContent = totalTaxiCost.toFixed(2);
    }
    
    // Вычисляем начальное значение
    calculateTaxiFare();
    
    // Добавляем обработчик события
    calculateButton.addEventListener('click', calculateTaxiFare);
});
