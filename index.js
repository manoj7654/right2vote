const instruments = [
    { name: "Instrument 1", weight: 3, volume: 2, value: 10 },
    { name: "Instrument 2", weight: 4, volume: 3, value: 15 },
    { name: "Instrument 3", weight: 2, volume: 1, value: 8 },
    { name: "Instrument 4", weight: 5, volume: 4, value: 20 }
];

const payloadCapacity = 10;
const volumeCapacity = 7;

function selectInstruments(instruments, payloadCapacity, volumeCapacity) {
   
    instruments.sort((a, b) => b.value / b.weight - a.value / a.weight);
         console.log(instruments)
    let totalWeight = 0;
    let totalVolume = 0;
    let totalValue = 0;
    const selectedInstruments = [];

    for (const instrument of instruments) {
        if (totalWeight + instrument.weight <= payloadCapacity && totalVolume + instrument.volume <= volumeCapacity) {
            selectedInstruments.push(instrument.name);
            totalWeight += instrument.weight;
            totalVolume += instrument.volume;
            totalValue += instrument.value;
        }
    }

    return {
        selectedInstruments,
        totalWeight,
        totalVolume,
        totalValue
    };
}

const result = selectInstruments(instruments, payloadCapacity, volumeCapacity);
console.log("Selected Instruments:", result.selectedInstruments);
console.log("Total Weight:", result.totalWeight, "kg");
console.log("Total Volume:", result.totalVolume, "m^3");
console.log("Total Scientific Value:", result.totalValue);
