/**
 * Select the most recent term
 */

'use strict';

var select = document.querySelector('#term_input_id');
var options = select.getElementsByTagName('option');
var form = document.querySelector('form[action="/pls/bprod/bwckgens.p_proc_term_date"]');
var currentTerm;

for (var i = 0; i < options.length; i++) {
  currentTerm = options[i];
  if (currentTerm.value && currentTerm.value.length > 0) {
    break;
  }
  currentTerm = null;
}

if (select && currentTerm) {
  select.value = currentTerm.value;
  form.submit();
}