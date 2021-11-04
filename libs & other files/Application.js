class application
{
    displayData()
    {
        
    }
}

class menu
{
    constructor()
    {

    }
    option1()
    {
        alert("Nowe słowo");
    };

    option2()
    {
        alert("Quizz");
    }
    option3()
    {
        alert("Ostatnio dodane");

    };

    option4()
    {
        alert("Zresetowano pola");
        document.getElementById('1').value = "";
        document.getElementById('2').value = "";
        document.getElementById('3').value = "";
        document.getElementById('4').value = "";
        document.getElementById('5').value = "";
        document.getElementById('6').value = "";
    }
}

class dataEditing
{
    constructor(/*word*/)
    {
        this.orgWord = 1;//word.orgWord;
        this.transWord = 2;//word.transWord;
        this.Sentence = 3;//word.Sentence;
        this.dataPackage = (this.orgWord + this.transWord + this.Sentence);
    }
    saveData()
    {
        var fileName = document.getElementById('7').value;
        var file = new Blob (["Hello Word"], {type: "text/plain;charset=utf-8"});
        saveAs(file, fileName+".html");
    }

}

class word
{
    constructor()
    {
        this.orgWord;
        this.transWord;
        this.otherTransWords;
        this.Sentence;
    }

    collect()
    {
        this.orgWord =  document.getElementById('1').value;
        this.transWord = document.getElementById('2').value;
        this.otherTransWords = ( document.getElementById('3').value + document.getElementById('4').value + document.getElementById('5').value );
        this.Sentence = document.getElementById('6').value;
    }

    display()
    {
        console.log(this.orgWord)
        console.log(this.transWord)
        console.log(this.otherTransWords)
        console.log(this.Sentence)
    }
}

class quiz 
{
    constructor()
    {
        
    }
    rand(x)
    {
        Math.ceil = 0;
        Math.floor = x;
        return (Math.rand()*x);
    }
}
function XD()
{
    prompt("XD");
}