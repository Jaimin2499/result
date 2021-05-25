let sub = prompt("Enter no of subjects: ");
let Subject = [];

let txt = "<table><tr><th>Subject</th><th>Marks</th></tr>"

let tot = 0;

for (i = 0; i < sub; i++) {
    Subject[i] = prompt("Enter name of subject: ");
}

for (i = 0; i < sub; i++) {
    let Marks = prompt("Enter mark of " + Subject[i]);
    tot += parseInt(Marks);
    txt += "<tr><td>" + Subject[i] + "</td><td>" + Marks + "</td></tr>";

}
txt += "<tr><td>Total</td><td>" + tot + "</td></tr><tr><td>Percentage</td><td>" + tot / Sname.length + "</td></tr></table>";

document.write(txt);