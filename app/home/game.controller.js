app.controller('gameController', function($scope, $timeout) {

    $scope.blocksNum = 16;
    $scope.rowCount = Math.sqrt($scope.blocksNum);
    $scope.blocks = [];
    $scope.selectedBlocks = [];
    
    $scope.correct = 0;
    $scope.wrong = 0;
    
    $scope.gameFinished = function() {
        return $scope.correct == $scope.blocksNum / 2; 
    };

    $scope.wait = false; 

    $scope.select = function(block) {
        if ($scope.wait)
            return;
        block.selected = true;
        var blocks = $scope.selectedBlocks;
        
        blocks.push(block);
        if (blocks.length == 2) {
            if (blocks[0].value == blocks[1].value) {
                $scope.correct += 1;
                blocks[0].solved = blocks[1].solved = true;
                blocks[0].selected = blocks[1].selected = false;
                $scope.selectedBlocks = [];
            } else {
                $scope.wrong += 1;
                $scope.wait = true;
                $timeout(function() {
                    blocks[0].selected = blocks[1].selected = false;
                    $scope.selectedBlocks = [];
                    $scope.wait = false;
                }, 1000);
            }
        }
    }

    $scope.restart = function() {
        $scope.initBlocks();
        $scope.correct = $scope.wrong = 0;
        $scope.wait = false;
    }

    $scope.initBlocks = function() {
        $scope.blocks = [];
        var blocks = $scope.blocks;
        for (var i = 0; i < $scope.blocksNum/2; i++) {
            blocks.push(newBlock(i));
            blocks.push(newBlock(i));
        }

        shuffle(blocks)

    };

    function newBlock(value) {
        return {
            value: value,
            selected: false,
            solved: false,
            text: function() {
                if (this.selected || this.solved) {
                    return this.value;
                } else {
                    return "?";
                }
            }
        }
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    $scope.initBlocks();
});