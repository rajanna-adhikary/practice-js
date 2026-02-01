🧠 CSS { } ANDAR KYA LIKHNA HAI — DECISION TREE (MINIMUM)

Socho har CSS rule = ek sawal ka jawab

selector {
  ????
}

❓ Q1: Size chahiye? (box bada/chhota)

👉 YES → yeh likho

width: ___;
height: ___;


Examples:

button

card

color box

❓ Q2: Background / color chahiye?

👉 YES →

background-color: ___;
color: ___;

❓ Q3: Border chahiye?

👉 YES →

border: 2px solid black;

❓ Q4: Line / row ka behaviour change karna?

👉 YES →

display: block | inline | inline-block;


Decision yaad hai:

text → inline

box + same line → inline-block

full row → block

❓ Q5: Center karna hai?
Text center?
text-align: center;

Box center?
margin: auto;

❓ Q6: Andar ka space chahiye?

👉 YES →

padding: ___;

❓ Q7: Bahaar ka gap chahiye?

👉 YES →

margin: ___;

🔥 MOST COMMON PATTERN (90% PROJECTS)
.box {
  width: ___;
  height: ___;
  background-color: ___;
  border: ___;
  display: inline-block;
  margin: ___;
}


👉 Isko yaad kar lo. Bas.

❌ Kya sochna hi nahi hai abhi

order of properties ❌

har property kya karti hai ❌

perfect CSS ❌

Browser sab handle kar leta hai.

🧩 Tumhare project ka example (real)
.button {
  width: 100px;
  height: 100px;
  background-color: grey;
  border: 2px solid black;
  display: inline-block;
}


Tumne bina jaane bhi correct CSS likh di — kyunki pattern follow hua.