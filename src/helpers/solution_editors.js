export const solution_editors = [
  {
    entityMap: {},
    blocks: [
      {
        key: "5h45a",
        text: "# @param {Interger Array} arr, {Integer} target",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45b",
        text: "# @return {Integer Array}",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },

      {
        key: "5h45c",
        text: "def two_sum(arr, target)",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45d",
        text: "    arr.each_with_index do |ele, i|",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45e",
        text: "        (i+1..arr.length-1).each do |x|",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45f",
        text: "            if arr[i]+arr[x] == target",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45g",
        text: "                return [i, x]",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45h",
        text: "            end",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45i",
        text: "        end",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45j",
        text: "    end",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45k",
        text: "end",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      }
    ]
  },
  {
    entityMap: {},
    blocks: [
      {
        key: "5h45a",
        text: "# @param {String} word",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45b",
        text: "# @return {Boolean}",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45l",
        text: "def check_palindrome(word)",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45r",
        text: "    word = word.downcase",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45x",
        text: "    word = word.gsub(/[^0-9a-z]/i, '')",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h46x",
        text: "    return word == word.reverse",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45t",
        text: "end",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      }
    ]
  },
  {
    entityMap: {},
    blocks: [
      {
        key: "5h45a",
        text: "# @param {String} mixedWord, {String} word",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45b",
        text: "# @return {Boolean}",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },

      {
        key: "5h45c",
        text: "def check_anagram(mixedWord, word)",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45d",
        text: "    count1 = count_letters(word)",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45e",
        text: "    count2 = count_letters(mixedWord)",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45f",
        text: "    return count1 == count2",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45p",
        text: "end",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45o",
        text: "    ",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45h",
        text: "def count_letters(word)",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45i",
        text: "    count = Hash.new(0)",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45j",
        text: "    word.split('').each do |letter|",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45k",
        text: "        count[:letter] += 1",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45l",
        text: "    end",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45m",
        text: "    count",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45n",
        text: "end",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      }
    ]
  },
  {
    entityMap: {},
    blocks: [
      {
        key: "5h45a",
        text: "# @param {Interger array []} arr",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45b",
        text: "# @return {Integer array []}",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45c",
        text: "def reverse(arr)",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45d",
        text: "    reversed_array = []",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45e",
        text: "    arr.each_with_index do |ele, i|",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45f",
        text: "        reversed_array.unshift(ele)",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45g",
        text: "    end",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45h",
        text: "    reversed_array",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      },
      {
        key: "5h45i",
        text: "end",
        type: "unstyled",
        depth: 0,
        entityRanges: [],
        data: {}
      }
    ]
  },
];
