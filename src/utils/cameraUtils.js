import * as camera from "@nativescript/camera";
import * as imagepicker from "nativescript-imagepicker";
const dialogs = require("tns-core-modules/ui/dialogs");
const application = require("tns-core-modules/application");
import * as androidUtils from "./androidUtils";

/**
 * Opens camera.
 *
 * Callback will give back ImageAsset.
 */
export function openCamera(callback) {
  if(callback == null)
  {
    if(!global.config.silent) console.log("CameraController: Cannot open camera no callback given.");
    return;
  }
  
  // Check if the device has a camera
  if (camera.isAvailable) {
    // Request permission and then present the camera
    camera.requestPermissions().then(
      () => {
        var options = {
          width: 300,
          height: 300,
          keepAspectRatio: true,
          saveToGallery: false
        };
        camera.takePicture(options).then(
          imageAsset => {
            callback(imageAsset);
          },
          err => {
            if(!global.config.silent) console.log("CameraController: Error -> ", err, err.stack);
          }
        );
      },
      err => {
        console.log(err);

          dialogs.confirm({
              title: "Toegang nodig",
              message: "We hebben geen toegang en kunnen daarom geen foto ophalen. Wil je dit aanpassen in je instellingen?",
              okButtonText: "Ja",
              cancelButtonText: "Nee"
          }).then(function (result) {
              if(result)
              {
                if(application.android)
                {
                  androidUtils.openSettings(application);
                }
              }
          });
      }
    );
  }
}

/**
* Opens image picker with multi mode.
*
 * Callback will give back ImageAsset[].
*/
export function openMultiImagePicker(callback) {
  if(callback == null)
  {
    if(!global.config.silent) console.log("CameraController: Cannot open image picker no callback given.");
    return;
  }

 // Get imagepicker
 let context = imagepicker.create({
   mode: "multiple" // use "multiple" for multiple selection
 });

 // Request permission and then present all the images from gallery
 context
   .authorize()
   .then(() => {
     return context.present();
   })
   .then(selection => {
     selection.forEach((selected) => {
      selected.options.width = 300;
      selected.options.height = 300;
      selected.options.keepAspectRatio = true;
     });
      callback(selection);
    })
    .catch(function(err) {
      if(!application.isAndroid || application.isAndroid && err[Object.keys(err)[0]] == false)
      {
          dialogs.confirm({
            title: "Toegang nodig",
            message: "We hebben geen toegang en kunnen daarom geen foto ophalen. Wil je dit aanpassen in je instellingen?",
            okButtonText: "Ja",
            cancelButtonText: "Nee"
        }).then(function (result) {
            if(result)
            {
              if(application.android)
              {
                androidUtils.openSettings(application);
              }
            }
        });
      }
   });
}

/**
* Opens image picker with single mode.
*
 * Callback will give back ImageAsset.
*/
export function openSingleImagePicker(callback) {
  if(callback == null)
  {
    if(!global.config.silent) console.log("CameraController: Cannot open image picker no callback given.");
    return;
  }

 // Get imagepicker
 let context = imagepicker.create({
   mode: "single" // use "multiple" for multiple selection
 });

 // Request permission and then present all the images from gallery
 context
   .authorize()
   .then(() => {
     return context.present();
   })
   .then(selection => {
     // Get selection and loop through all images
     selection.forEach(selected => {
       selected.options.width = 300;
       selected.options.height = 300;
       selected.options.keepAspectRatio = true;
       
       let imageAsset = selected;
       callback(imageAsset);
       return;
     });
   })
   .catch(function(err) {
    if(!application.isAndroid || application.isAndroid && err[Object.keys(err)[0]] == false)
    {
        dialogs.confirm({
          title: "Toegang nodig",
          message: "We hebben geen toegang en kunnen daarom geen foto ophalen. Wil je dit aanpassen in je instellingen?",
          okButtonText: "Ja",
          cancelButtonText: "Nee"
      }).then(function (result) {
          if(result)
          {
            if(application.android)
            {
              androidUtils.openSettings(application);
            }
          }
      });
    }
   });
}