 document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact form script loaded and DOMContentLoaded.');
  
    const privacyCheckbox = document.querySelector('form input[name="privacy"]');
    const submitButton = document.querySelector('form button[type="submit"]');
  
    console.log('Privacy Checkbox:', privacyCheckbox);
    console.log('Submit Button:', submitButton);
  
    // Esegui solo se siamo sulla pagina di contatto e gli elementi esistono
    if (privacyCheckbox && submitButton) {
      console.log('Checkbox and button found. Disabling button.');
      // Disabilita il pulsante all'avvio
      submitButton.disabled = true;
  
      // Aggiungi un listener per l'evento 'change' sulla checkbox
      privacyCheckbox.addEventListener('change', function() {
        console.log('Privacy checkbox changed. Checked:', this.checked);
        // Abilita o disabilita il pulsante in base allo stato della checkbox
        submitButton.disabled = !this.checked;
        console.log('Submit button disabled state:', submitButton.disabled);
      });
    } else {
      console.error('Could not find privacy checkbox or submit button on this page.');
    }
  });
 