<?php

namespace AppBundle\Controller;

use AppBundle\Entity\BlogUser;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\HttpFoundation\Response;


class loginController extends Controller
{

    /**
     * @Route("/login", name="login")
     */
    public function loginAction(Request $request, AuthenticationUtils $authenticationUtils)
    {

        $errors = $authenticationUtils->getLastAuthenticationError();
        $lastusername = $authenticationUtils->getLastUsername();
        if($errors){
            $errors = $errors->getMessageKey();
            $returnData = array("errors" => $errors, "lastusername" => $lastusername);
            return new Response(json_encode($returnData, true), 404);
        }else{
        //if($this->getUser()) {
           //$user = $this->getUser()->getUserLogin();
            $returnData = array("user" => 'admin');
            return new Response(json_encode($returnData, true), 200);
        //}
        }

//        return $this->render('default/index.html.twig', array(
//            'errors' => $errors,
//            'lastusername' => $lastusername
//        ));
    }

    /**
     * @Route("/login-check", name="login-check")
     */
    public function loginCheckAction(Request $request, AuthenticationUtils $authenticationUtils)
    {
        if($this->getUser()) {
            $user = $this->getUser()->getUserLogin();
            $returnData = array("userLogin" => $user, 'loginStatus' => true);
            return new Response(json_encode($returnData, true), 200);
        }else{

            $returnData = array("loginStatus" => false);
            return new Response(json_encode($returnData, true), 404);
            //}
        }

//        return $this->render('default/index.html.twig', array(
//            'errors' => $errors,
//            'lastusername' => $lastusername
//        ));
    }

    /**
     * @Route("/logout", name="logout")
     */
    public function logoutAction() {

    }

}