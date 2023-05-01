import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  // image binding
public imageUrl = '../assets/images/tree-736885__480.jpg';

// disabled button binding

public disable = true;

// attribute binding

public image = '../assets/images/tree-736885__480.jpg';
   
}