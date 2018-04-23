import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-file-component',
  templateUrl: './file-component.component.html',
  styleUrls: ['./file-component.component.scss']
})
export class FileComponentComponent  {

  @Input() obj: Object;
  @Input() prop: string;
  @Input() extraClass: string;
  @Input() isDisabled: any;


  fileClass: string ='uploader';

  constructor() { }

  borderColor: string = '#ccc';
  iconColor: string = '#ccc';
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';

  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';

  isCtrlDisabled()
  {
    return this.isDisabled === true || this.isDisabled == 'true';
  }

  handleDragEnter() {
    if(this.isCtrlDisabled()){
      return;
    }
    this.dragging = true;
  }

  handleDragLeave() {
    if(this.isCtrlDisabled())
    {
      return;
    }
    this.dragging = false;
  }

  handleDrop(e) {
    e.preventDefault();
    if(this.isCtrlDisabled()){
      return;
    }

    this.dragging = false;
    this.handleInputChange(e);
  }

  handleImageLoad() {
    this.imageLoaded = true;
    this.iconColor = this.overlayColor;
  }

  handleClick(e){
    if(this.isCtrlDisabled() )
    {
      e.preventDefault();
      return;
    }

  }
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    this.obj[this.prop] =  file;
    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    var reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;
    // this.obj[this.prop] = this.imageSrc;
  }

  _setActive() {
    this.borderColor = this.activeColor;
    if (this.imageSrc.length === 0) {
      this.iconColor = this.activeColor;
    }
  }

  _setInactive() {
    this.borderColor = this.baseColor;
    if (this.imageSrc.length === 0) {
      this.iconColor = this.baseColor;
    }
  }

  ngOnInit() {
    if (this.extraClass) {
      this.fileClass = `uploader ${this.extraClass}`;
    }
    // if(this.isDisabled){
    //   this.fileClass = `uploader isDisabled ${this.extraClass}`;
    // }
  }

}
