const statesByCountry = {
    USA: ["California", "Texas", "New York"],
    India: ["Maharashtra", "Tamil Nadu", "Karnataka"],
    UK: ["England", "Scotland", "Wales"]
};

function populateStates() {
    const countrySelect = document.getElementById('country');
    const stateSelect = document.getElementById('state');
    const selectedCountry = countrySelect.value;

    while (stateSelect.options.length > 1) {
        stateSelect.remove(1);
    }

    if (selectedCountry in statesByCountry) {
        statesByCountry[selectedCountry].forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.text = state;
            stateSelect.add(option);
        });
    }
}