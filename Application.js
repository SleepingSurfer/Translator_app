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
    constructor(word)
    {
        this.orgWord = word.orgWord;
        this.transWord = word.transWord;
        this.Sentence = word.Sentence;
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
        this.otherTransWords = (document.getElementById('3').value,document.getElementById('4').value,document.getElementById('5').value)
        this.Sentence = document.getElementById('6').value;
    }

    display()
    {
        console.log(this.orgWord)
        console.log(this.transWord)
        console.log(this.Sentence)
    }
}
function XD()
{
    prompt("XD");
}