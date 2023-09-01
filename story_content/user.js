function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5VSzlXDxOS5":
        Script1();
        break;
      case "5figmkYvpg7":
        Script2();
        break;
      case "64IbP9anlr9":
        Script3();
        break;
      case "6ScteHZq4tj":
        Script4();
        break;
      case "5oY6SPH7txE":
        Script5();
        break;
      case "6IYBi2k7aFh":
        Script6();
        break;
      case "5lNmHYaWiVJ":
        Script7();
        break;
      case "61wvqnUiBrK":
        Script8();
        break;
      case "6B1XQHAyzYg":
        Script9();
        break;
      case "5co0DWqEnpL":
        Script10();
        break;
      case "5kc0Nq9EwkB":
        Script11();
        break;
      case "5Y3X9bJoV2Q":
        Script12();
        break;
      case "6Y5ytRuyGRC":
        Script13();
        break;
      case "69nfAmSAWji":
        Script14();
        break;
      case "6Il2hkV6RNP":
        Script15();
        break;
      case "6KhcVdDxVfe":
        Script16();
        break;
      case "6a70WDWuJ1y":
        Script17();
        break;
      case "60GKFanOSUC":
        Script18();
        break;
      case "6VCzpcZsr9a":
        Script19();
        break;
      case "5zQ55dE7u9P":
        Script20();
        break;
      case "6qtl4PvLUSI":
        Script21();
        break;
      case "5rOrO3dwxYH":
        Script22();
        break;
      case "5rR40Ti94QM":
        Script23();
        break;
      case "6YRLUiKLCIr":
        Script24();
        break;
      case "5eV3AfldiRc":
        Script25();
        break;
      case "5tevlVvBxoo":
        Script26();
        break;
      case "6LaiyylHQyo":
        Script27();
        break;
      case "64XFDX7AfMc":
        Script28();
        break;
  }
}

function Script1()
{
  CeltaTextSaver.saveText('u00t01');
}

function Script2()
{
  CeltaTextSaver.saveText('u00t03');
}

function Script3()
{
  CeltaTextSaver.saveText('u00t06');
}

function Script4()
{
  CeltaTextSaver.saveText('u00t07');
}

function Script5()
{
  CeltaLinkOpener.openLink("u00t09");
}

function Script6()
{
  CeltaLinkOpener.openLink("u00t10");
}

function Script7()
{
  CeltaLinkOpener.openLink("u00t11");
}

function Script8()
{
  CeltaTextSaver.saveText("u00t12");
}

function Script9()
{
  CeltaTextSaver.saveText('u00t13');
}

function Script10()
{
  CeltaLinkOpener.openLink("u00t14");
}

function Script11()
{
  CeltaTextSaver.saveText('u00t16');
}

function Script12()
{
  CeltaTextSaver.saveText('u00t17');
}

function Script13()
{
  CeltaLinkOpener.openLink("u00t18");
}

function Script14()
{
  CeltaTextSaver.saveText('u00t19');
}

function Script15()
{
  window.CeltaRanking = (function() {
    var rankIndex = 0;
    var rankSelections = [];

    function addChoice(selection, text) {
        var player = GetPlayer();

        rankSelections.push(selection);

        player.SetVar(selection + "Active", "false");
        player.SetVar("choice" + rankIndex, text);

        rankIndex++;
        player.SetVar("undoActive", "true");
    }

    function undoChoice() {
        var player = GetPlayer();
        var selection = rankSelections.pop();

        player.SetVar("choice" + --rankIndex, "");
        player.SetVar(selection + "Active", "true");

        if (rankIndex === 0) {
            player.SetVar("undoActive", "false");
        }
    }
    
    return {
        addChoice: addChoice,
        undoChoice: undoChoice
    }
}());
}

function Script16()
{
  CeltaRanking.addChoice("pick0", "Complete online work before the deadline.");
}

function Script17()
{
  CeltaRanking.addChoice("pick1", "Contribute actively when doing collaborative tasks with other candidates.");
}

function Script18()
{
  CeltaRanking.addChoice("pick2", "Complete and upload assignments by the deadline specified by your tutor.");
}

function Script19()
{
  CeltaRanking.addChoice("pick3", "Be respectful, diplomatic and sensitive towards colleagues and tutors at all times.");
}

function Script20()
{
  CeltaRanking.addChoice("pick4", "When doing individual online tasks, complete the task before checking the answer.");
}

function Script21()
{
  CeltaRanking.addChoice("pick5", "Adhere to the rules and policies of the centre where you are based.");
}

function Script22()
{
  CeltaRanking.addChoice("pick6", "Dress appropriately in teaching practice.");
}

function Script23()
{
  CeltaRanking.addChoice("pick7", "Maintain up-to-date records in your CELTA 5 and portfolio.");
}

function Script24()
{
  CeltaRanking.addChoice("pick8", "Be punctual at all times. If you know you will be late, let the appropriate people know as soon as possible.");
}

function Script25()
{
  CeltaRanking.undoChoice();
}

function Script26()
{
  CeltaLinkOpener.openLink("u00t21");
}

function Script27()
{
  CeltaLinkOpener.openLink("u00endnotes");
}

function Script28()
{
  CeltaLinkOpener.openLink("u00readinglist");
}

