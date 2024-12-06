import { loadCustomInputMasks } from "./utils/input_masks.js";
import './elements/sidebar.js'

document.addEventListener('DOMContentLoaded', function () {
  // Popper.js
  const popperScript = document.createElement('script');
  popperScript.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";
  document.body.appendChild(popperScript);

  // Bootstrap
  const bootstrapScript = document.createElement('script');
  bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js";
  document.body.appendChild(bootstrapScript);

  const bootstrapBundleScript = document.createElement('script');
  bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
  bootstrapScript.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
  bootstrapScript.crossOrigin = "anonymous";
  document.body.appendChild(bootstrapBundleScript);

  // Input Mask
  const inputMaskScript = document.createElement('script');
  inputMaskScript.src = "https://cdn.jsdelivr.net/npm/inputmask@5.0.9/dist/inputmask.min.js"
  inputMaskScript.onload = () => loadCustomInputMasks();
  document.body.appendChild(inputMaskScript);
});
