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
    constructor(orgWord,transWord,Sentence)
    {
        this.orgWord = orgWord;
        this.transWord = transWord;
        this.Sentence = Sentence;
    }
}

function XD()
{
    prompt("XD");
}