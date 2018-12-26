// 1. 求二叉树中的节点个数
// 递归解法：
// （1）如果二叉树为空，节点个数为0
// （2）如果二叉树不为空，二叉树节点个数 = 左子树节点个数 + 右子树节点个数 + 1
funcction getNodeNum(pRoot){
	if(pRoot == null){
		return 0;
	}
	return getNodeNum(pRoot.left)+getNodeNum(pRoot.right)+1;
}
// 2. 求二叉树的深度
// 递归解法：
// （1）如果二叉树为空，二叉树的深度为0
// （2）如果二叉树不为空，二叉树的深度 = max(左子树深度， 右子树深度) + 1
function getDeep(pRoot){
	if(pRoot == null)
		return 0;
	var leftDeep=getDeep(pRoot.left);
	var rightDeep=getDeep(pRoot.right);
	return leftDeep>rightDeep? (leftDeep+1):(rightDeep+1);
}
// 3. 前序遍历，中序遍历，后序遍历
// 前序遍历递归解法：
// （1）如果二叉树为空，空操作
// （2）如果二叉树不为空，访问根节点，前序遍历左子树，前序遍历右子树
function tarvel(pRoot){
	if(pRoot == NULL)
		return;
	//前序
	console.log(pRoot); // 访问根节点
	tarvel(pRoot.left); // 前序遍历左子树
	tarvel(pRoot.right); // 前序遍历右子树
	//中序
	tarvel(pRoot.left); // 中序遍历左子树
	console.log(pRoot); // 访问根节点
	tarvel(pRoot.right); // 中序遍历右子树
	//后序
	tarvel(pRoot.left); // 后序遍历左子树
	tarvel(pRoot.right); // 后序遍历右子树
	console.log(pRoot); // 访问根节点
}
// 4.分层遍历二叉树（按层次从上往下，从左往右）

// 相当于广度优先搜索，使用队列实现。
// 队列初始化，将根节点压入队列。当队列不为空，进行如下操作：
// 弹出一个节点，访问，若左子节点或右子节点不为空，将其压入队列。
function levelTravel(pRoot){
	if(!pRoot){
        return [];
    }
    var arr = [],
        res = [];
    arr.push(pRoot);
    while(arr.length){
        var len = arr.length;
        var tempArr = [];
        for(var i = 0;i<len;i++){
            var temp = arr.shift();
            tempArr.push(temp.val);
            if(temp.left){
                arr.push(temp.left);
            }
            if(temp.right){
                arr.push(temp.right);
            }
        }
        res.push(tempArr);
    }
    return res;
}
//按之打印
function Print(pRoot){
    if( !pRoot)
        return [];
     var arr=[],res=[],flag=true;//arr辅助队列，res结果，flag奇数行标志
     arr.push(pRoot);
     while(arr.length){
         var len = arr.length;
         var tempArr = [];
         for(var i=0;i<len;i++){
             var temp = arr.shift();
             tempArr.push(temp.val);
             if(temp.left){
                 arr.push(temp.left);
			 }
			 if(temp.right){
				 arr.push(temp.right);
			 }
            }
            if(!flag){//flag=false
                tempArr.reverse();                
            }
            flag=!flag;
            res.push(tempArr);
        }
        return res;
}    
// 5.输入两棵二叉树A，B，判断B是不是A的子结构。
// （ps：我们约定空树不是任意一个树的子结构）
//思路：第一步 在1中查找和2一样的头结点a 树的遍历 采用递归
//第二步：判断1中以a为根节点的子树是不是与2具有相同的结构 采用递归
function HasSubtree(pRoot1, pRoot2)
{
    var result = false;
    if(pRoot1 !=null && pRoot2 !=null){
        if(pRoot1.val == pRoot2.val)//节点相同
            result = doTree(pRoot1,pRoot2);//判断是否有相同的结构
        if(!result)//判断左子树中是否有想通的节点
            result = HasSubtree(pRoot1.left,pRoot2);
        if(!result)
            result = HasSubtree(pRoot1.right,pRoot2);
    }
    return result;
}
//判断树1中以R为根节点的子树是否和树2有相同的结构
function doTree(pRoot1,pRoot2){
    if(pRoot2 == null)
        return true;
    if(pRoot1 == null)
        return false;
    if(pRoot1.val !=pRoot2.val)//r的值和树2的根节点不同，返回false
        return false;//值相同，则递归判断左右节点
    return doTree(pRoot1.left,pRoot2.left) && doTree(pRoot1.right,pRoot2.right);
}
// 6. 求二叉树第K层的节点个数
// 递归解法：
// （1）如果二叉树为空或者k<1返回0
// （2）如果二叉树不为空并且k==1，返回1
// （3）如果二叉树不为空且k>1，返回左子树中k-1层的节点个数与右子树k-1层节点个数之和
function getNode(pRoot,k){
	if(pRoot == null || k<1){
		return 0;
	}
	if(k == 1){
		return 1;
	}
	var left=getNode(pRoot.left,k-1);
	var right = getNode(pRoot.right,k-1);
	return left+right;
}
// 7. 求二叉树中叶子节点的个数
//  递归解法：
//  （1）如果二叉树为空，返回0
//  （2）如果二叉树不为空且左右子树为空，返回1
//  （3）如果二叉树不为空，且左右子树不同时为空，
//  返回左子树中叶子节点个数加上右子树中叶子节点个数
function leafNum(pRoot){
	if(pRoot == null)
		return 0;
	if(pRoot.left == null && pRoot.right ==null)
		return 1;
	var leftNum=leafNum(pRoot.left);
	var rightNum=leafNum(pRoot.right);
	return leftNum+rightNum;
}
// 8. 判断两棵二叉树是否结构相同
//  不考虑数据内容。结构相同意味着对应的左子树和对应的右子树都结构相同。
//  递归解法：
//  （1）如果两棵二叉树都为空，返回真
//  （2）如果两棵二叉树一棵为空，另一棵不为空，返回假
//  （3）如果两棵二叉树都不为空，如果对应的左子树和右子树都同构返回真，
//  其他返回假
function check(pRoot1,pRoot2){
	if(pRoot1 == null && pRoot2 == null)
		return true;
	if(pRoot1 == null || pRoot2 == null)
		return false;
	var resLeft = check(pRoot1.left,pRoot2.left);
	var resRight= check(pRoot1.right,pRoot2.right);
	return (resLeft && resRight);
}
// 9. 判断二叉树是不是平衡二叉树
// 为空树或者他的左右两个子树的高度差的绝对值不超过1且左右两个树均为平衡二叉树
//  递归解法：
//  （1）如果二叉树为空，返回真
//  （2）如果二叉树不为空，
//  如果左子树和右子树都是AVL树并且左子树和右子树高度相差不大于1，
//  返回真，其他返回假
function IsAVL(pRoot,height){
	if(pRoot == null)
		return true;
	var leftHeight;
	var resLeft = IsAVL(pRoot.left,leftHeight);
	var rightHeight;
	var resRight =IsAVL(pRoot.right,rightHeight);
	if(resLeft && resRight && Math.abs(leftHeight-rightHeight)<=1){
		height=max(leftHeight,rightHeight)+1;
		return true;
	}else{
		height=max(leftHeight,rightHeight)+1;
		return false;
	}
}
// 10. 求二叉树的镜像
// 递归解法：
// （1）如果二叉树为空，返回空
// （2）如果二叉树不为空，求左子树和右子树的镜像，然后交换左子树和右子树
function Mirror(pRoot){
	if(pRoot == null)
		return null;
	var leftMirror=Mirror(pRoot.left);//求左子树的镜像
	var rightMirror =Mirror(pRoot.right);//求柚子树的镜像
	pRoot.left = rightMirror;
	pRoot.right=leftMirror;
	return pRoot;
}
//对称二叉树
//思路：首先根节点以及其左右子树，左子树的左子树和右子树的右子树相同
//左子树的右子树和右子树的左子树相同即可，采用递归
function isSymmetrical2(root1, root2){
    if(root1 == null && root2 == null){
        return true;
    }
    if(root1 == null || root2 == null){
        return false;
    }
    if(root1.val != root2.val){
        return false;
    }
    return isSymmetrical2(root1.left, root2.right) && isSymmetrical2(root1.right, root2.left);
}
 
function isSymmetrical(pRoot)
{
    // write code here
    return isSymmetrical2(pRoot, pRoot)
}
// 11. 求二叉树中两个节点的最低公共祖先节点
// 递归解法：
// （1）如果两个节点分别在根节点的左子树和右子树，则返回根节点
// （2）如果两个节点都在左子树，则递归处理左子树；
// 如果两个节点都在右子树，则递归处理右子树
function findNode(pRoot,node){//查找节点的位置
	if(pRoot == NULL || node ==null)
		return false
	if(pRoot == node)//为根节点直接返回true
		return true
	var found =findNode(pRoot.left,node);//在左子树中查找
	if(! found){
		found =findNode(pRoot.right,node);
	}
	return found;
}
function GetLastCommonParent(pRoot,node1,node2){
	if(findNode(pRoot.left,node1)){//节点1在左子树
		if(findNode(pRoot.right,node2)){//节点2在右子树
			return pRoot;//返回根节点
		}else{//节点2在左子树。递归处理左子树
			return GetLastCommonParent(pRoot.left,node1,node2);
		}
	}else{//节点1在右子树
		if(findNode(pRoot.left,node2)){//节点2在左子树
			return pRoot；
		}else{//结点2在右子树，递归处理右子树
			return GetLastCommonParent(pRoot.right,node1,node2);
		}
	}
}
//非递归处理
//先求从根节点到两个节点的路径，然后再比较对应路径的节点就行，
//最后一个相同的节点也就是他们在二叉树中的最低公共祖先节点
function getPath(pRoot,node,path){
	if(pRoot == node){
		path.push(pRoot);
		return true;
	}
	if(pRoot == null){
		retuen false;
	}
	path.push(pRoot);
	var found=false;
	found = getPath(pRoot.left,node,path);//左子树中找路径
	if(! found){//没有找到去右子树找
		found = getPath(pRoot.right,node,path);
	}
	if(!found){//右子树也没有找到
		path.pop();//删除该节点
	}
    return found;
}
function GetLastCommonParent(pRoot,node1,node2){
	if(pRoot == null || node1 ==null || node2 ==null)
		return null;
	var path1;
	var res1=getPath(pRoot.node1,path1);
	var path2;
	var res2 =getPath(pRoot,node2,path2);
	if(!res1 || !res2 )
		return null;
	var plast=null;

}
//剑指 二叉树中和为某一值的路径
function FindPath(root, expectNumber) {
    var result = [];
    if (root === null) {
        return [];
    }
    dfsFind(root, expectNumber, [], 0, result);
    return result;
}
function dfsFind(root, expectNumber, path, currentSum, result) {
    currentSum += root.val;
    path.push(root.val);
  
    if (currentSum == expectNumber && root.left == null && root.right == null) {
        result.push(path.slice(0));
    }
    if (root.left != null) {
        dfsFind(root.left, expectNumber, path, currentSum, result);
    }
  
    if (root.right != null) {
        dfsFind(root.right, expectNumber, path, currentSum, result);
    }
  
    path.pop();
}
// 5. 将二叉查找树变为有序的双向链表
// 要求不能创建新节点，只调整指针。
// 递归解法：
// （1）如果二叉树查找树为空，不需要转换，
// 对应双向链表的第一个节点是NULL，最后一个节点是NULL
// （2）如果二叉查找树不为空：
// 解题思路：
// 1.将左子树构造成双链表，并返回链表头节点。
// 2.定位至左子树双链表最后一个节点。
// 3.如果左子树链表不为空的话，将当前root追加到左子树链表。
// 4.将右子树构造成双链表，并返回s链表头节点。
// 5.如果右子树链表不为空的话，将该链表追加到root节点之后。
// 6.根据左子树链表是否为空确定返回的节点。
function Convert(root)
{
    if(root == null)
    	return null;
    if(root.right == null && root.left == null) {
    	return root;
    }
     // 1.将左子树构造成双链表，并返回链表头节点
    var left = Convert(root.left);
    var p =left;
    //2.定位至左子树双链表最后一个节点
    while(p!=null && p.right!=null){
    }
    // 3.如果左子树链表不为空的话，将当前root追加到左子树链表
    if(left!=null){
        p.right = root;
        root.left = p;
    }
     // 4.将右子树构造成双链表，并返回链表头节点
    var right = Convert(root.right);
    // 5.如果右子树链表不为空的话，将该链表追加到root节点之后
    if(right){
        right.left = root;
        root.right = right;
    }
    return left!==null?left:root;
}
//二叉树的下一个节点
//1.二叉树为空，则返回空；
//2.节点右孩子存在，则设置一个指针从该节点的右孩子出发，
//一直沿着指向左子结点的指针找到的叶子节点即为下一个节点；
//3.节点不是根节点。如果该节点是其父节点的左孩子，则返回父节点；
//否则继续向上遍历其父节点的父节点，重复之前的判断，返回结果
function GetNext(pNode)
{
    if(!pNode){return null;}    // 空指针
    var p;
    if(pNode.right){            // 存在右子树
        p = pNode.right;
        while(p.left){
            p = p.left;
        }
    }else{                      // 不存在右子树
        p = pNode.next;
        if(pNode.next && pNode.next.right == pNode){
            while(p.next && p.next.right == p){
                p = p.next;
            }
            if(p.next == null){
                p =  null;
            }else{
                p = p.next;
            }
        }
    }
    return p;
}
// 12. 求二叉树中节点的最大距离
// 即二叉树中相距最远的两个节点之间的距离。
// 递归解法：
// （1）如果二叉树为空，返回0，同时记录左子树和右子树的深度，都为0
// （2）如果二叉树不为空，最大距离要么是左子树中的最大距离，
// 要么是右子树中的最大距离，
// 要么是左子树节点中到根节点的最大距离+右子树节点中到根节点的最大距离，
// 同时记录左子树和右子树节点中到根节点的最大距离。 
function {

}
// 13. 由前序遍历序列和中序遍历序列重建二叉树
// 二叉树前序遍历序列中，第一个元素总是树的根节点的值。
// 中序遍历序列中，左子树的节点的值位于根节点的值的左边，右子树的节点的值位
// 于根节点的值的右边。
// 递归解法：
// （1）如果前序遍历为空或中序遍历为空或节点个数小于等于0，返回NULL。
// （2）创建根节点。前序遍历的第一个数据就是根节点的数据，
// 在中序遍历中找到根节点的位置，可分别得知左子树和右子树的前序和中序遍
// 历序列，重建左右子树。
function reConstructBinaryTree(pre, vin)
{
   var result = null;
    if(pre.length > 1){
        var root = pre[0];//得到根节点
        var vinRootIndex = vin.indexOf(root);//vin中root的位置
        var vinLeft = vin.slice(0,vinRootIndex);//左子树的中序遍历
        var vinRight = vin.slice(vinRootIndex+1);//右子树的中序遍历
        pre.shift();
        var preLeft = pre.slice(0,vinLeft.length);//左子树的前序序遍历
        var preRight = pre.slice(vinLeft.length);//右子树的前序遍历
      result = {
            val:root,
            left:reConstructBinaryTree(preLeft,vinLeft),
            right:reConstructBinaryTree(preRight,vinRight)
        }
    }else if(pre.length == 1){
        result = {
            val:pre[0],
            left:null,
            right:null
        }
    }
    return result;
}
// 14.判断二叉树是不是完全二叉树
// 若设二叉树的深度为h，除第 h 层外，
// 其它各层 (1～h-1) 的结点数都达到最大个数，
// 第 h 层所有的结点都连续集中在最左边，这就是完全二叉树。
// 有如下算法，按层次（从上到下，从左到右）遍历二叉树，
// 当遇到一个节点的左子树为空时，则该节点右子树必须为空，
// 且后面遍历的节点左右子树都必须为空，否则不是完全二叉树。