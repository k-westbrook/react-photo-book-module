# react-photo-book-module

Node Module Package that generates a component Row. The Row component takes in props via data. data should be an array of image URLs. The component will map the images in rows of threes. 


# Example Data Structure
This is an example of the structure of data that must be passed as a prop to the Row component.

     [
    "https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
    "https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    ]

# How to Use in a React App

   **How to install**

    npm install react-photo-book-module

**How to import**

    import  Row  from  'react-photo-book-module'
    
**How to render component**

     <Row  data={this.state.row}  />
    
# Display in Browser

![Display of photos with 3 images per row](https://res.cloudinary.com/dmp2crnzz/image/upload/v1563946780/readme/Screen_Shot_2019-07-23_at_10.38.24_PM.png)
