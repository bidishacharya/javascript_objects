// Question Number 1

function question_1()
{
	var set = [1,2,3,4,5,6,7,8,9];
	document.write("The provided array is: " + set + "<br>");
	var n = prompt("Enter the no. of elements to be removed from the end of the array:");
	var setreversed = set.reverse();
	var i=0;
	document.write("Following items have been removed: <br>");
	for(i=0;i<n;i++)
	{
		if(i<n)
		{
			document.write(setreversed[i] + "<br>");
		}
		
		else
		{
			exit;
		}
	}
}

// Question Number 2

function question_2()
{
		var liverpool = ["Gerrard ","and ","Agger ","are ","Liverpool's ","legend."];
		var joined = liverpool.join();
		document.write("The joint string is: " + joined + ".");
}		

// Question Number 3

function question_3()
{		
		var set = [1,2,3,4,5];
		document.write("The elements in the array are: "+set);
		var n = Number(prompt("Enter the number that you want to remove:"));	
		var index = set.indexOf(n);
		if(index > -1){
			set.splice(index,1);	
		}
		document.write("<br> The array after removing the element is: "+set);
	}
	
	
// Question Number 4

function question_4()
{
	var email = prompt("Enter your email address:");
	var length = email.length;
	var i=0;
	var j=0;
	document.write("The protected email address is: " + email[0] + email[1] + email[2] + email[3]);
	for(i=4;i<length;i++)
	{
		if(email[i]==='@')
		{
			for(j=i;j<length;j++)
			{
			document.write(email[j]);
			}
			break;
		}
		document.write("*");
	}
}
	
// Question Number 5

function question_5()
{
	var string = prompt("Enter a string:");
	document.write(string + "<br> <br>");
	var rep = prompt("Enter the number of times you would like to repeat " + string + ":");
	var i=0;
	for(i=0; i<rep; i++)
	{
		document.write(string + "<br>");
	}
}
	
// Question Number 6

function question_6()
{
	var stat = "I want apple.";
	document.write(stat);
	var add = prompt("Enter the missing article in the given sentence to make it gramatically correct (Hint: a/an/the):");
	var position = 6;
	var output = [stat.slice(0, position), add, stat.slice(position)].join(' ');
	document.write("<br> <br>" + output);
	}
	
// Question Number 7

function question_7()
{		
	var entereddate = prompt("Enter the date(mm/dd/yyyy):");
	var date = new Date(entereddate);
	var month = date.getMonth()+1;
	document.write(month);
	switch(month)
	{
			case 1:
				document.write("<br> The month is January.");
				break;
			case 2:
				document.write("<br> The month is February.");
				break;
			case 3:
				document.write("<br> The month is March.");
				break;
			case 4:
				document.write("<br> The month is April.");
				break;
			case 5:
				document.write("<br> The month is May.");
				break;
			case 6:
				document.write("<br> The month is June");
				break;
			case 7:
				document.write("<br> The month is July.");
				break;
			case 8:
				document.write("<br> The month is August.");
				break;
			case 9:
				document.write("<br> The month is September.");
				break;
			case 10:
				document.write("<br> The month is October.");
				break;
			case 11:
				document.write("<br> The month is November.");
				break;
			case 12:
				document.write("<br> The month is December.");
				break;
	}
}
	
// Question Number 8

function question_8()
{		
		var input = prompt("Enter any date:(mm/dd/yyyy)");
		var date = new Date(input);
		document.write("The entered day is "+date+"<br>");
		date.setDate(date.getDate()-1);
		document.write("The day before was "+date);
}


// Question Number 9

function question_9()
{
	var character = prompt("Enter a character:");
	if((character>= 'a' && character<= 'z') || (character>= 'A' && character<= 'Z') || (character>= '0' && character<= '9'))
	{
		document.write("The character you entered is alpha numeric.");
	}
	else
	{
		document.write("The character you entered is not alpha numeric.");
	}
}

// Question Number 10

function question_10()
{	
	var string = prompt("Enter a string:");
	if((string>= 'A' && string<= 'Z'))
	{
		document.write("The string you entered is in uppercase.");
	}
	else
	{
		document.write("The string you entered is not in uppercase.");
	}
}


// Question Number 11

function question_11()
{		
	var string = prompt("Enter a string:");
	var i=0;
	var counter=0;
	for(i=0;i<string.length;i++)
	{
		if((string[i] === 'a') ||(string[i] === 'e') ||(string[i] === 'i') ||(string[i] === 'o') ||(string[i] === 'u')||(string[i] === 'A') ||(string[i] ==='E') ||(string[i] === 'I') ||(string[i] === 'O') ||(string[i] === 'U'))
			{
				counter++;
			}	
	}
	document.write("Total number of vowels in the given string is "+counter+".");
}