import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CodeBlock } from './components/CodeBlock';
import { OutputPanel } from './components/OutputPanel';
import { ProgramInput } from './components/ProgramInput';
import { Footer } from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [programOutput, setProgramOutput] = useState<string[]>([]);
  const [userInput, setUserInput] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [calendarData, setCalendarData] = useState<any[]>([]);
  const [numDays, setNumDays] = useState(0);
  const [showProgram1, setShowProgram1] = useState(false);
  const [showProgram2, setShowProgram2] = useState(false);
  const [showProgram3, setShowProgram3] = useState(false);
  const [showProgram4, setShowProgram4] = useState(false);
  const [showProgram5A, setShowProgram5A] = useState(false);
  const [showProgram5B, setShowProgram5B] = useState(false);
  const [showProgram6, setShowProgram6] = useState(false);
  const [showProgram7, setShowProgram7] = useState(false);
  const [showProgram8, setShowProgram8] = useState(false);
  const [showProgram9, setShowProgram9] = useState(false);
  const [showProgram10, setShowProgram10] = useState(false);
  const [showProgram11, setShowProgram11] = useState(false);
  const [showProgram12, setShowProgram12] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [stringMatchData, setStringMatchData] = useState({
    mainString: '',
    patternString: '',
    replaceString: ''
  });

  const [stack, setStack] = useState<string[]>(['#']);
  const [stackElements, setStackElements] = useState<number[]>([]);
  const [stackTop, setStackTop] = useState(-1);
  const [stackMenuChoice, setStackMenuChoice] = useState(0);
  const [stackInput, setStackInput] = useState('');
  const [infix, setInfix] = useState('');
  const [postfix, setPostfix] = useState('');

  const handleHomeClick = () => {
    setShowAbout(false);
    setShowProgram1(false);
    setShowProgram2(false);
    setShowProgram3(false);
    setShowProgram4(false);
    setShowProgram5A(false);
    setShowProgram5B(false);
    setShowProgram6(false);
    setShowProgram7(false);
    setShowProgram8(false);
    setShowProgram9(false);
    setShowProgram10(false);
    setShowProgram11(false);
    setShowProgram12(false);
    setActiveSection('hero');
    setProgramOutput([]);
    setUserInput('');
    setCurrentStep(0);
    setCalendarData([]);
    setNumDays(0);
    setStringMatchData({
      mainString: '',
      patternString: '',
      replaceString: ''
    });
    setStackElements([]);
    setStackTop(-1);
    setStackMenuChoice(0);
    setStackInput('');
    setInfix('');
    setPostfix('');
    setIsProgramsOpen(false);
  };

  const prec = (symb: string): number => {
    switch (symb) {
      case '#': return -1;
      case '(':
      case ')': return 0;
      case '+':
      case '-': return 1;
      case '*':
      case '/':
      case '%': return 2;
      case '^':
      case '$': return 3;
      default: return -1;
    }
  };

  const evaluateInfixToPostfix = (infixExpr: string) => {
    let result = '';
    const newStack = ['#'];
    
    for (let i = 0; i < infixExpr.length; i++) {
      const symb = infixExpr[i];
      
      if (symb === '(') {
        newStack.push(symb);
      } else if (symb === ')') {
        while (newStack[newStack.length - 1] !== '(') {
          result += newStack.pop();
        }
        newStack.pop(); // Remove '('
      } else if (['+', '-', '*', '/', '%', '^', '$'].includes(symb)) {
        while (prec(newStack[newStack.length - 1]) >= prec(symb)) {
          result += newStack.pop();
        }
        newStack.push(symb);
      } else {
        result += symb;
      }
    }
    
    while (newStack.length > 1) {
      result += newStack.pop();
    }
    
    return result;
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setDarkMode(theme === 'dark');

    const handleScroll = () => {
      setIsNavbarScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  const handleProgramClick = (program: string) => {
    setShowAbout(false);
    setShowProgram1(false);
    setShowProgram2(false);
    setShowProgram3(false);
    setShowProgram4(false);
    setShowProgram5A(false);
    setShowProgram5B(false);
    setShowProgram6(false);
    setShowProgram7(false);
    setShowProgram8(false);
    setShowProgram9(false);
    setShowProgram10(false);
    setShowProgram11(false);
    setShowProgram12(false);

    switch (program) {
      case 'Program 1':
        setShowProgram1(true);
        break;
      case 'Program 2':
        setShowProgram2(true);
        break;
      case 'Program 3':
        setShowProgram3(true);
        break;
      case 'Program 4':
        setShowProgram4(true);
        break;
      case 'Program 5A':
        setShowProgram5A(true);
        break;
      case 'Program 5B':
        setShowProgram5B(true);
        break;
      case 'Program 6':
        setShowProgram6(true);
        break;
      case 'Program 7':
        setShowProgram7(true);
        break;
      case 'Program 8':
        setShowProgram8(true);
        break;
      case 'Program 9':
        setShowProgram9(true);
        break;
      case 'Program 10':
        setShowProgram10(true);
        break;
      case 'Program 11':
        setShowProgram11(true);
        break;
      case 'Program 12':
        setShowProgram12(true);
        break;
    }

    setCurrentStep(0);
    setProgramOutput([]);
    setCalendarData([]);
    setNumDays(0);
    setStringMatchData({
      mainString: '',
      patternString: '',
      replaceString: ''
    });
    setStackElements([]);
    setStackTop(-1);
    setStackMenuChoice(0);
    setStackInput('');
    setInfix('');
    setPostfix('');
    setIsProgramsOpen(false);
  };

  const pushToStack = (item: number) => {
    if (stackTop === 2) { // MAX - 1 = 3 - 1 = 2
      setProgramOutput(prev => [...prev, "-----------Stack overflow-----------"]);
      return;
    }
    const newTop = stackTop + 1;
    const newStack = [...stackElements];
    newStack[newTop] = item;
    setStackElements(newStack);
    setStackTop(newTop);
    setProgramOutput(prev => [...prev, `Element ${item} pushed to stack`]);
  };

  const popFromStack = () => {
    if (stackTop === -1) {
      setProgramOutput(prev => [...prev, "-----------Stack underflow-----------"]);
      return;
    }
    const item = stackElements[stackTop];
    setStackTop(stackTop - 1);
    setProgramOutput(prev => [...prev, `Element popped is: ${item}`]);
  };

  const displayStack = () => {
    if (stackTop === -1) {
      setProgramOutput(prev => [...prev, "-----------Stack is empty-----------"]);
      return;
    }
    let stackDisplay = "Stack elements are:\n";
    for (let i = stackTop; i >= 0; i--) {
      stackDisplay += `| ${stackElements[i]} |\n`;
    }
    setProgramOutput(prev => [...prev, stackDisplay]);
  };

  const checkPalindrome = () => {
    if (stackTop === -1) {
      setProgramOutput(prev => [...prev, "-----------Stack is empty-----------"]);
      return;
    }
    
    let stackContent = "Stack content are:\n";
    for (let i = stackTop; i >= 0; i--) {
      stackContent += `| ${stackElements[i]} |\n`;
    }
    
    let reverseContent = "Reverse of stack content are:\n";
    for (let i = 0; i <= stackTop; i++) {
      reverseContent += `| ${stackElements[i]} |\n`;
    }
    
    let flag = true;
    for (let i = 0; i <= Math.floor(stackTop / 2); i++) {
      if (stackElements[i] !== stackElements[stackTop - i]) {
        flag = false;
        break;
      }
    }
    
    const result = flag ? "It is palindrome number" : "It is not a palindrome number";
    setProgramOutput(prev => [...prev, stackContent, reverseContent, result]);
  };

  const handleStackOperation = () => {
    const choice = parseInt(stackInput);
    setStackMenuChoice(choice);
    
    switch (choice) {
      case 1:
        setProgramOutput(prev => [...prev, "Enter an element to be pushed:"]);
        setCurrentStep(1);
        break;
      case 2:
        popFromStack();
        break;
      case 3:
        checkPalindrome();
        break;
      case 4:
        displayStack();
        break;
      case 5:
        setProgramOutput(prev => [...prev, "Exiting program..."]);
        break;
      default:
        setProgramOutput(prev => [...prev, "Please enter valid choice"]);
        break;
    }
    setStackInput('');
  };

  const handleStackInput = () => {
    if (stackMenuChoice === 1 && currentStep === 1) {
      const item = parseInt(stackInput);
      if (!isNaN(item)) {
        pushToStack(item);
        setCurrentStep(0);
        setStackMenuChoice(0);
      }
    } else {
      handleStackOperation();
    }
    setStackInput('');
  };

  const handleProgram4Input = () => {
    const result = evaluateInfixToPostfix(userInput);
    setProgramOutput([
      `The entered infix expression is: ${userInput}`,
      `The corresponding postfix expression is: ${result}`
    ]);
    setInfix(userInput);
    setPostfix(result);
    setUserInput('');
    setCurrentStep(1);
  };

  const handleStringMatch = () => {
    const { mainString, patternString, replaceString } = stringMatchData;
    let result = '';
    let found = false;
    
    let i = 0;
    while (i < mainString.length) {
      if (mainString.slice(i, i + patternString.length) === patternString) {
        result += replaceString;
        i += patternString.length;
        found = true;
      } else {
        result += mainString[i];
        i++;
      }
    }

    setProgramOutput(prev => [
      ...prev,
      `The string before pattern match is: ${mainString}`,
      found 
        ? `The string after pattern match and replace is: ${result}`
        : "Pattern string is not found"
    ]);
  };

  const handleProgram2Input = () => {
    switch(currentStep) {
      case 0:
        setStringMatchData(prev => ({ ...prev, mainString: userInput }));
        setProgramOutput([...programOutput, `Enter the main string: ${userInput}`]);
        break;
      case 1:
        setStringMatchData(prev => ({ ...prev, patternString: userInput }));
        setProgramOutput([...programOutput, `Enter the pat string: ${userInput}`]);
        break;
      case 2:
        setStringMatchData(prev => ({ ...prev, replaceString: userInput }));
        setProgramOutput([...programOutput, `Enter the replace string: ${userInput}`]);
        handleStringMatch();
        break;
    }
    setUserInput('');
    setCurrentStep(currentStep + 1);
  };

  const handleProgram1Input = () => {
    if (currentStep === 0) {
      const days = parseInt(userInput);
      if (isNaN(days) || days <= 0) {
        setProgramOutput([...programOutput, 'Please enter a valid number of days.']);
        return;
      }
      setNumDays(days);
      setProgramOutput([...programOutput, `Enter the number of days in the week: ${days}`]);
      setCurrentStep(1);
      setCalendarData([]);
    } else {
      const dayIndex = Math.floor((currentStep - 1) / 3);
      const inputType = (currentStep - 1) % 3;
      
      const newCalendarData = [...calendarData];
      if (!newCalendarData[dayIndex]) {
        newCalendarData[dayIndex] = {};
      }

      switch (inputType) {
        case 0:
          newCalendarData[dayIndex].dayName = userInput;
          setProgramOutput([...programOutput, `Enter the day name: ${userInput}`]);
          break;
        case 1:
          const date = parseInt(userInput);
          if (isNaN(date)) {
            setProgramOutput([...programOutput, 'Please enter a valid date.']);
            return;
          }
          newCalendarData[dayIndex].date = date;
          setProgramOutput([...programOutput, `Enter the date: ${date}`]);
          break;
        case 2:
          newCalendarData[dayIndex].activity = userInput;
          setProgramOutput([...programOutput, `Enter the activity for the day: ${userInput}`]);
          if (dayIndex === numDays - 1) {
            setProgramOutput(prev => [
              ...prev,
              '\nWeek\'s Activity Details:',
              ...newCalendarData.map((day, i) => (
                `Day ${i + 1}:\nDay Name: ${day.dayName}\nDate: ${day.date}\nActivity: ${day.activity}\n`
              ))
            ]);
            setCurrentStep(-1);
            return;
          }
          break;
      }
      setCalendarData(newCalendarData);
      setCurrentStep(currentStep + 1);
    }
    setUserInput('');
  };

  const handleInputSubmit = () => {
    if (showProgram1) {
      handleProgram1Input();
      return;
    }
    if (showProgram4) {
      handleProgram4Input();
      return;
    }
    if (showProgram2) {
      handleProgram2Input();
      return;
    }
    if (showProgram3) {
      handleStackInput();
      return;
    }
    if (currentStep === 0) {
      const days = parseInt(userInput);
      if (isNaN(days) || days <= 0) {
        setProgramOutput([...programOutput, 'Please enter a valid number of days.']);
        return;
      }
      setNumDays(days);
      setProgramOutput([...programOutput, `Enter the number of days in the week: ${days}`]);
      setCurrentStep(1);
      setCalendarData([]);
    } else {
      const dayIndex = Math.floor((currentStep - 1) / 3);
      const inputType = (currentStep - 1) % 3;
      
      const newCalendarData = [...calendarData];
      if (!newCalendarData[dayIndex]) {
        newCalendarData[dayIndex] = {};
      }

      switch (inputType) {
        case 0:
          newCalendarData[dayIndex].dayName = userInput;
          setProgramOutput([...programOutput, `Enter the day name: ${userInput}`]);
          break;
        case 1:
          newCalendarData[dayIndex].date = parseInt(userInput);
          setProgramOutput([...programOutput, `Enter the date: ${userInput}`]);
          break;
        case 2:
          newCalendarData[dayIndex].activity = userInput;
          setProgramOutput([...programOutput, `Enter the activity for the day: ${userInput}`]);
          if (dayIndex === numDays - 1) {
            setProgramOutput(prev => [
              ...prev,
              '\nWeek\'s Activity Details:',
              ...newCalendarData.map((day, i) => (
                `Day ${i + 1}:\nDay Name: ${day.dayName}\nDate: ${day.date}\nActivity: ${day.activity}\n`
              ))
            ]);
            setCurrentStep(-1);
            return;
          }
          break;
      }
      setCalendarData(newCalendarData);
      setCurrentStep(currentStep + 1);
    }
    setUserInput('');
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowProgram1(false);
    setShowProgram2(false);
    setShowProgram3(false);
    setShowProgram4(false);
    setShowProgram5A(false);
    setShowProgram5B(false);
    setShowProgram6(false);
    setShowProgram7(false);
    setShowProgram8(false);
    setShowProgram9(false);
    setShowProgram10(false);
    setShowProgram11(false);
    setShowProgram12(false);
  };

  const programs = [
    { name: 'Program 1', href: '#program-1' },
    { name: 'Program 2', href: '#program-2' },
    { name: 'Program 3', href: '#program-3' },
    { name: 'Program 4', href: '#program-4' },
    { name: 'Program 5A', href: '#program-5a' },
    { name: 'Program 5B', href: '#program-5b' },
    { name: 'Program 6', href: '#program-6' },
    { name: 'Program 7', href: '#program-7' },
    { name: 'Program 8', href: '#program-8' },
    { name: 'Program 9', href: '#program-9' },
    { name: 'Program 10', href: '#program-10' },
    { name: 'Program 11', href: '#program-11' },
    { name: 'Program 12', href: '#program-12' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navigation
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        isNavbarScrolled={isNavbarScrolled}
        isProgramsOpen={isProgramsOpen}
        setIsProgramsOpen={setIsProgramsOpen}
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onProgramClick={handleProgramClick}
        programs={programs}
      />

      {!showAbout && !showProgram1 && !showProgram2 && !showProgram3 && !showProgram4 &&
       !showProgram5A && !showProgram5B && !showProgram6 && !showProgram7 && !showProgram8 &&
       !showProgram9 && !showProgram10 && !showProgram11 && !showProgram12 && (
        <HeroSection />
      )}

      {showAbout && <AboutSection darkMode={darkMode} />}

      {(showProgram1 || showProgram2 || showProgram3 || showProgram4 || showProgram5A || showProgram5B || 
        showProgram6 || showProgram7 || showProgram8 || showProgram9 || showProgram10 || showProgram11 || 
        showProgram12) && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-white/5' : 'bg-white shadow-xl'}`}>
              {showProgram1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-orange-500 mb-4">Program 1: Weekly Calendar</h2>
                  <div className="space-y-4">
                    <CodeBlock
                      code={`struct Day {
    char *dayName;
    int date;
    char *activity;
};

void create(struct Day *day) {
    day->dayName = (char *)malloc(sizeof(char) * 20);
    day->activity = (char *)malloc(sizeof(char) * 100);

    printf("Enter the day name: ");
    scanf("%s", day->dayName);

    printf("Enter the date: ");
    scanf("%d", &day->date);

    printf("Enter the activity for the day: ");
    scanf(" %[^\\n]s", day->activity);
}

void read(struct Day *calendar, int size) {
    for (int i = 0; i < size; i++) {
        printf("Enter details for Day %d:\\n", i + 1);
        create(&calendar[i]);
    }
}

void display(struct Day *calendar, int size) {
    printf("\\nWeek's Activity Details:\\n");
    for (int i = 0; i < size; i++) {
        printf("Day %d:\\n", i + 1);
        printf("Day Name: %s\\n", calendar[i].dayName);
        printf("Date: %d\\n", calendar[i].date);
        printf("Activity: %s\\n", calendar[i].activity);
        printf("\\n");
    }
}`}
                      darkMode={darkMode}
                    />

                    <div className="space-y-4">
                      <ProgramInput
                        value={userInput}
                        onChange={setUserInput}
                        onSubmit={handleInputSubmit}
                        placeholder={
                          currentStep === 0
                            ? "Enter the number of days"
                            : currentStep > 0 && currentStep % 3 === 1
                            ? "Enter day name"
                            : currentStep > 0 && currentStep % 3 === 2
                            ? "Enter date"
                            : "Enter activity"
                        }
                      />

                      <OutputPanel output={programOutput.join('\n')} darkMode={darkMode} />
                    </div>
                  </div>
                </div>
              )}

              {showProgram2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-orange-500 mb-4">Program 2: String Pattern Matching and Replace</h2>
                  <div className="space-y-4">
                    <CodeBlock
                      code={`#include<stdio.h>

char str[50], pat[20], rep[20], res[50];
int c = 0, m = 0, i = 0, j = 0, k, flag = 0;

void stringmatch() {
    while (str[c] != '\\0') {
        if (str[m] == pat[i]) {
            i++;
            m++;
            if (pat[i] == '\\0') {
                flag = 1;
                for (k = 0; rep[k] != '\\0'; k++, j++) {
                    res[j] = rep[k];
                }
                i = 0;
                c = m;
            }
        } else {
            res[j] = str[c];
            j++;
            c++;
            m = c;
            i = 0;
        }
    }
    res[j] = '\\0';
}

void main() {
    printf("Enter the main string:");
    gets(str);
    printf("\\nEnter the pat string:");
    gets(pat);
    printf("\\nEnter the replace string:");
    gets(rep);
    printf("\\nThe string before pattern match is:\\n %s", str);
    stringmatch();
    if (flag == 1)
        printf("\\nThe string after pattern match and replace is: \\n %s ", res);
    else
        printf("\\nPattern string is not found");
}`}
                      darkMode={darkMode}
                    />

                    <div className="space-y-4">
                      <ProgramInput
                        value={userInput}
                        onChange={setUserInput}
                        onSubmit={handleInputSubmit}
                        placeholder={
                          currentStep === 0
                            ? "Enter the main string"
                            : currentStep === 1
                            ? "Enter the pattern string"
                            : "Enter the replace string"
                        }
                      />

                      <OutputPanel output={programOutput.join('\n')} darkMode={darkMode} />
                    </div>
                  </div>
                </div>
              )}

              {showProgram3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-orange-500 mb-4">Program 3: Stack Operations and Palindrome Check</h2>
                  <div className="space-y-4">
                    <CodeBlock
                      code={`#include<stdio.h>
#include<stdlib.h>

#define MAX 3

int s[MAX];
int top = -1;

void push(int item);
int pop();
void palindrome();
void display();

void main() {
    int choice, item;
    while (1) {
        printf("\\n\\n\\n\\n-----------Menu----------- : ");
        printf("\\n=>1.Push an Element to Stack and Overflow demo ");
        printf("\\n=>2.Pop an Element from Stack and Underflow demo");
        printf("\\n=>3.Palindrome demo ");
        printf("\\n=>4.Display ");
        printf("\\n=>5.Exit");
        printf("\\nEnter your choice: ");
        scanf("%d", &choice);
        switch (choice) {
        case 1:
            printf("\\nEnter an element to be pushed: ");
            scanf("%d", &item);
            push(item);
            break;
        case 2:
            item = pop();
            if (item != -1)
                printf("\\nElement popped is: %d", item);
            break;
        case 3:
            palindrome();
            break;
        case 4:
            display();
            break;
        case 5:
            exit(1);
        default:
            printf("\\nPlease enter valid choice ");
            break;
        }
    }
}`}
                      darkMode={darkMode}
                    />

                    <div className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <h3 className="font-semibold mb-2">Menu Options:</h3>
                        <ul className="space-y-1 text-sm">
                          <li>1. Push an Element to Stack and Overflow demo</li>
                          <li>2. Pop an Element from Stack and Underflow demo</li>
                          <li>3. Palindrome demo</li>
                          <li>4. Display</li>
                          <li>5. Exit</li>
                        </ul>
                      </div>

                      <ProgramInput
                        value={stackInput}
                        onChange={setStackInput}
                        onSubmit={handleInputSubmit}
                        placeholder={
                          stackMenuChoice === 1 && currentStep === 1
                            ? "Enter element to push"
                            : "Enter your choice (1-5)"
                        }
                      />

                      <OutputPanel
                        output={
                          programOutput.length === 0
                            ? "-----------Menu----------- :\n=>1.Push an Element to Stack and Overflow demo\n=>2.Pop an Element from Stack and Underflow demo\n=>3.Palindrome demo\n=>4.Display\n=>5.Exit\nEnter your choice:"
                            : programOutput.join('\n')
                        }
                        darkMode={darkMode}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default App;