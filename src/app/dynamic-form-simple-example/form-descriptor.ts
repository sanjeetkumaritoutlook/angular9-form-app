import { Validators } from '@angular/forms';

export const nameDescription = {
   name: {
      type: 'text',
      value: '',
      placeHolder: 'Type policy name',
      label: 'name',
      validation: [ Validators.required]
   },
   description: {
      type: 'text',
      value: '',
      placeHolder: 'Type description for policy',
      label: 'description'
   },
   notes: {
      type: 'text',
      value: '',
      placeHolder: 'Write a comment to explain what changes',
      label: 'notes'
   },
  modelyear: {
      type: 'component!',
      value: '',
      label: 'modelyear'
   },
 cancel: {
   type: 'button',
   label: 'Cancel',
 },
 OK: {
   type: 'button',
   label: 'OK',
}
};