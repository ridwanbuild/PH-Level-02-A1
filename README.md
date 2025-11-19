# What are some differences between interfaces and types in TypeScript? 
### Interface আর Type এর মধ্যে পার্থক্য 
#### 1. Interface মূলত অবজেক্টের স্ট্রাকচার বর্ণনা করতে ব্যবহার হয় ইন্টারফেস বেশি “অবজেক্ট কেমন হবে” সেটা define করতে ব্যবহৃত হয়। আরও একটা সুবিধা হচ্ছে — ইন্টারফেসকে extend করে আরও বড় করতে পারে| 
#### 2. Type অনেক বেশি flexible টাইপ দিয়ে শুধুমাত্র অবজেক্ট নয় — union, intersection, primitive (string, number), function type—সবকিছু define করতে পারে| 
#### 3. Interface পুনরায় declare করলে merge হয় একই নামে দুইবার interface লিখলে TypeScript ওগুলোকে merge করে ফেলে। কিন্তু type এর ক্ষেত্রে এটা error দেবে। 
#### interface → objects/classes এর জন্য best 

### type → বেশি flexible জায়গায় ব্যবহারের জন্য (union, complex types etc.) 

## Interface উদাহরণ
``` interface User {
  name: string;
  age: number;
}

// Extend করা যায়
interface User {
  address?: string;
}
## Type উদাহরণ
type User = {
  name: string;
  age: number;
};

// Union করা যায়
type Status = "success" | "error";
```

# What is the use of the keyof keyword in TypeScript? Provide an example.
## keyof কী করে? keyof মূলত কোনো object type-এর সবগুলো key-এর নামকে একটি union type হিসেবে বের করে আনে। মানে, আপনার object এ যে property গুলো আছে— keyof সেগুলোর নামকে string literal type হিসেবে দেয়।
এটা খুবই কাজে লাগে যখন আমরা type-safe ভাবে object এর property access করতে চাই। 

### উদাহরণ

```type User = {
  name: string;
  age: number;
  email: string;
};

// এখানে Keys হবে: "name" | "age" | "email"
type UserKeys = keyof User;


