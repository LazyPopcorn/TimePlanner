console.log('Hello');



document.addEventListener('DOMContentLoaded', (event) => {
    const table = document.getElementById('myTable');
    if (table) {
        const parseTime = (timeStr) => {
            const [hours, minutes] = timeStr.split(':').map(Number);
            return hours * 60 + minutes;
        };

        const formatTime = (totalMinutes) => {
            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;
            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        };

        const updateResult = (rowIndex) => {
            const cell3 = document.getElementById(`cell-${rowIndex}-3`).value;
            const cell4 = document.getElementById(`cell-${rowIndex}-4`).value;
            const cell5 = document.getElementById(`cell-${rowIndex}-5`).value;

            const totalMinutes = [cell3, cell4, cell5]
                .filter(Boolean)
                .map(parseTime)
                .reduce((acc, minutes) => acc + minutes, 0);

            const result = formatTime(totalMinutes);
            document.getElementById(`cell-${rowIndex + 1}-3`).value = result;
        };

        // Add event listeners to input fields for each row
        for (let i = 1; i <= 10; i++) {
            document.getElementById(`cell-${i}-3`).addEventListener('input', () => updateResult(i));
            document.getElementById(`cell-${i}-4`).addEventListener('input', () => updateResult(i));
            document.getElementById(`cell-${i}-5`).addEventListener('input', () => updateResult(i));
        }
    }
});