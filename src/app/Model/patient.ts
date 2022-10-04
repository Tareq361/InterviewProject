export class Patient {
  id: number | undefined;
  name: string | undefined;
  age: number | undefined;
  gender: string | undefined;
  dob: string | undefined;
  image:File|undefined;
  imageName:String|undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
  address: string | undefined;
  familylist:FamilyInformation;
  constructor(id: number | undefined, name: string | undefined, age: number | undefined, gender: string | undefined,
              dob: string | undefined, image: File | undefined,imageName: string | undefined,
              email: string | undefined, phoneNumber: string | undefined, address: string | undefined,
              familyInformation:FamilyInformation) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.dob = dob;
    this.image = image;
    this.imageName = imageName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.familylist=familyInformation;
  }


}

export  interface FamilyInformation{
  id: number | undefined;
  name: string | undefined;
  relation: string | undefined;
  phoneNumber: string | undefined;



}
